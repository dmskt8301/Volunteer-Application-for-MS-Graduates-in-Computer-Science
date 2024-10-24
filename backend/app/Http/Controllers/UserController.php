<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function createUser(Request $request): JsonResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'string', 'min:8', 'confirmed', Password::defaults()],
            'gender' => ['required', 'in:male,female'],
            'dob' => ['required', 'date'],
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'image' => ['nullable', 'string'],
            'role' => ['required', 'in:admin,professor,student'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gender' => $request->gender,
            'dob' => $request->dob,
            'phone' => $request->phone,
            'address' => $request->address,
            'image' => $request->image,
            'role' => $request->role,
            'status' => 'active'
        ]);

        event(new Registered($user));

        return response()->json([
            'status' => 'ok',
            'user' => $user
        ]);
    }

    public function uploadUserImage(Request $request): JsonResponse
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time().'.'.$request->image->extension();

        $request->image->move(public_path('images/users'), $imageName);

        $imagePath = 'images/users/'.$imageName;

        $user = auth()->user();
        $user->image = $imagePath;
        $user->save();

        return response()->json([
            'status' => 'ok',
            'user' => $user
        ]);
    }

    public function removeUserImage(): JsonResponse
    {
        $user = auth()->user();
        if ($user->image) {
            $imagePath = public_path($user->image);
            if (file_exists($imagePath)) {
                unlink($imagePath);

                $user->image = null;
                $user->save();

                return response()->json([
                    'message' => 'User image deleted successfully'
                ]);
            }
        }
        return response()->json([
            'message' => 'User image not found'
        ], 404);
    }

    public function getUser(): JsonResponse
    {
        $user = auth()->user();
        return response()->json([
            'user' => $user
        ]);
    }

    public function updateUser(Request $request): JsonResponse
    {
        $user = auth()->user();
        $user->update($request->all());
        return response()->json([
            'user' => $user
        ]);
    }

    public function updateUserInfo(Request $request, $userId): JsonResponse
    {
        $user = User::find($userId);
        $user->update($request->all());
        return response()->json([
            'user' => $user
        ]);
    }

    public function getAllUsers(): JsonResponse
    {
        $users = User::all();
        return response()->json([
            'users' => $users
        ]);
    }

    public function getAllUsersByRole($role): JsonResponse
    {
        $count = request('count', 10);
        $users = User::where('role', $role)->paginate($count);
        return response()->json([
            'users' => $users
        ]);
    }

    public function uploadImage(Request $request): JsonResponse
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time().'.'.$request->image->extension();

        if($request->role === 'admin' || $request->role === 'professor' || $request->role === 'student') {
            $request->image->move(public_path('images/'.$request->role), $imageName);
            $imagePath = 'images/'.$request->role.'/'.$imageName;
        }
        else {
            $request->image->move(public_path('images'), $imageName);
            $imagePath = 'images/'.$imageName;
        }


        return response()->json([
            'status' => 'ok',
            'image' => $imagePath
        ]);
    }

    public function removeImage(Request $request): JsonResponse
    {
        $image = $request->path;
        $imagePath = public_path($image);
        if (file_exists($imagePath)) {
            unlink($imagePath);
            return response()->json([
                'message' => 'Image deleted successfully'
            ]);
        } else {
            return response()->json([
                'message' => 'Image not found'
            ], 404);
        }
    }

    public function uploadDocument(Request $request): JsonResponse
    {
        $request->validate([
            'document' => 'required|mimes:pdf,doc,docx,txt,rtf|max:2048',
        ]);

        $documentName = time().'.'.$request->document->extension();

        $request->document->move(public_path('documents'), $documentName);

        $documentPath = 'documents/'.$documentName;

        return response()->json([
            'status' => 'ok',
            'document' => $documentPath
        ]);
    }

    public function removeDocument(Request $request): JsonResponse
    {
        $document = $request->path;
        $documentPath = public_path($document);
        if (file_exists($documentPath)) {
            unlink($documentPath);
            return response()->json([
                'message' => 'Document deleted successfully'
            ]);
        } else {
            return response()->json([
                'message' => 'Document not found'
            ], 404);
        }
    }

}