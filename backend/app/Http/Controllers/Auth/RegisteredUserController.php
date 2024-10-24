<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'string', 'min:8', 'confirmed', Rules\Password::defaults()],
            'gender' => ['required', 'in:male,female'],
            'dob' => ['required', 'date'],
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'image' => ['nullable', 'image'],
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

        Auth::login($user);

        return response()->json([
            'status' => 'ok',
            'user' => Auth::user()
        ]);
    }
}
