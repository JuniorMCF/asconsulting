<?php

namespace App\Http\Controllers\API\Web;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;

class PublicPostController extends Controller
{
    //
    public function show(Request $request)
    {

        $post = Post::where("route", $request->route)->first();

        $tags = Tag::where("post_id", $post->id)->get();


        $categorias = Categoria::where("estado",1)->get();

        //\Log::debug($post);
        return response()->json([
            "post" => $post,
            "tags" => $tags,
            "categorias"=>$categorias
        ], 200);
    }
}
