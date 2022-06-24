<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\UsersPermission;
use App\Models\UsersRole;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);

        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        $token = $user->createToken('API Token')->accessToken;

        return response(['user' => $user, 'token' => $token]);
    }
    /**
     * Inicio de sesión y creación de token
     */
    public function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);


        if (!Auth::guard('web')->attempt($credentials))
            return response()->json([
                "message" => "Bad credentials"
            ], 401);

        $user = $request->user();

        $tokenResult = $user->createToken('Personal Access Token');

        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        $roles = UsersRole::join("roles", "roles.id", "=", "users_roles.role_id")
            ->where("users_roles.user_id", $user->id)
            ->select("roles.*")->get();

        $permisos = UsersPermission::join("permissions", "permissions.id", "=", "users_permissions.permission_id")
            ->where("users_permissions.user_id", $user->id)
            ->select("permissions.*")->get();


        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($token->expires_at)->toDateTimeString(),
            'user' => $user,
            'roles' => $roles,
            'permissions' => $permisos,
            'status' => 200
        ], 200);
    }

    public function logoutUser()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);
    }
}
