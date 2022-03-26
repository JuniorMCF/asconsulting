<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class WritersController extends Controller
{
    //
    public function all(){
        $users = User::with("roles")->with("entradas")->get();


        return response()->json($users,200);
    }
}
