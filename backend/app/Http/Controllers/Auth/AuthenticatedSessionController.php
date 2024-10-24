<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status' => 'Unauthorized',
                'message' => 'Invalid login details'
            ], 401);
        }

        $request->authenticate();
        
        $request->session()->regenerate();

        if (!Auth::user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email not verified.'], 403);
        }

        return response()->json([
            'status' => 'ok',
            'user' => Auth::user()
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): JsonResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'status' => 'ok',
            'message' => 'Successfully logged out'
        ]);
    }
}
