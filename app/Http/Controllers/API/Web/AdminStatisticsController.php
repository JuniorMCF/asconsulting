<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\UsersRole;
use App\Models\Visita;
use App\Models\Visualizacione;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminStatisticsController extends Controller
{
    //

    public function allStatistics()
    {
        $visitas = Visita::groupBy('page')->select('page', DB::raw('count(*) as total'))->get();

        $posts = Visualizacione::join("posts", "posts.id", "=", "visualizaciones.post_id")->groupBy('posts.titulo')->select('posts.titulo', DB::raw('count(*) as total'))->get();

        $countrys = Visita::groupBy('country')->select('country', DB::raw('count(*) as total'))->get();




        return response()->json([
            "visitas" => $visitas,
            "posts" => $posts,
            "countrys" => $countrys
        ]);
    }

    //about roles users
    public function rolesUser()
    {
        $roles = Role::where("slug", "!=", "propietario")->get();

        return response()->json(
            $roles
        );
    }
    public function updateRoleUser(Request $request)
    {

        $res = UsersRole::where("user_id", $request->user_id)->update([
            "role_id" => $request->rol_id
        ]);

        return response()->json(
            $res
        );
    }
}
