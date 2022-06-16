<?php

namespace App\Http\Controllers\API\Web;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\Models\Comment;
use App\Models\Contactpage;
use App\Models\Favorito;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use App\Models\Visualizacione;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Stevebauman\Location\Facades\Location;

class PublicPostController extends Controller
{
    //
    public function show(Request $request)
    {


        $post = Post::join("users", "users.id", "=", "posts.user_id")
            ->with("visualizaciones")
            ->with("comments")
            ->with("categorias")
            ->with("favoritos")
            ->where("posts.estado","=","publicado")
            ->where("route", $request->route)
            ->select("posts.*", "users.name", "users.last_name", "users.foto as user_foto")

            ->first();
        /**
         * agregamos una vista
         */

        if (!$post) {
            abort(404);
        }

        $userIp = $request->ip();

        $locationData = Location::get($userIp);

        if ($userIp != "127.0.0.1") {
            Visualizacione::create([
                "post_id" => $post->id,
                "ip" => $userIp,
                "country" => $locationData->countryName,
                "zip"=>$locationData->countryCode,
                "city"=>$locationData->cityName
            ]);
            //return response()->json(true, 200);
        } else {

            Visualizacione::create([
                "post_id" => $post->id,
                "ip" => $userIp,
                "country" => "",
                "zip"=>"",
                "city"=>""
            ]);
        }


        /**obtenemos los tags asociados al post */

        $tags = Tag::where("post_id", $post->id)->get();


        $categorias = Categoria::where("estado", 1)->get();

        $user = auth()->user();

        $isFavorite = null;
        if ($user) {
            $isFavorite = Favorito::where([
                "post_id" => $post->id,
                "user_id" => $user->id,
                "estado" => 1
            ])->first();
        } else {
            $isFavorite = Favorito::where([
                "post_id" => $post->id,
                "ip" => $userIp,
                "estado" => 1
            ])->first();
        }

        if ($isFavorite) {
            //\Log::debug($post);
            return response()->json([
                "post" => $post,
                "tags" => $tags,
                "categorias" => $categorias,
                "isfavorite" => true
            ], 200);
        }

        return response()->json([
            "post" => $post,
            "tags" => $tags,
            "categorias" => $categorias,
            "isfavorite" => false
        ], 200);
    }

    public function all(Request $request)
    {
        $posts = Post::join("users", "users.id", "=", "posts.user_id")

            ->with("visualizaciones")
            ->with("comments")
            ->with("favoritos")
            ->with("categorias")
            ->where("posts.estado","=","publicado")
            ->select("posts.*", "users.name", "users.last_name", "users.foto as user_foto")
            ->orderBy("posts.fecha_publicacion", "desc")
            ->get();

        $categorias = Categoria::where("estado", 1)->get();

        return response()->json([
            "posts" => $posts,
            "categorias" => $categorias,
            "ip" => $request->ip()
        ], 200);
    }
    public function filterCategory(Request $request, $name)
    {
        $posts = Post::join("users", "users.id", "=", "posts.user_id")
            ->with("visualizaciones")
            ->with("comments")
            ->with("favoritos")
            ->with("categorias")
            ->where("posts.estado","=","publicado")
            ->select("posts.*", "users.name", "users.last_name", "users.foto as user_foto")
            ->orderBy("posts.fecha_publicacion", "desc")
            ->get();



        $categoria = Categoria::where("nombre", ucwords($name))->get()->first();
        $new_filter = array();

        foreach ($posts as $post) {
            $item_filter = $post->categorias->filter(function ($item) use ($categoria) {

                if ($item->categoria_id == $categoria->id) {

                    return $item;
                }
            });

            if(count($item_filter)>0){
                array_push($new_filter,$post);
            }
        }
        $categorias = Categoria::where("estado", 1)->get();

        return response()->json([
            "filter" => $new_filter,
            "posts" => $posts,
            "categorias" => $categorias,
            "ip" => $request->ip()
        ], 200);
    }
    public function filterTag(Request $request,$tag)
    {
        $posts = Post::join("users", "users.id", "=", "posts.user_id")
            ->with("visualizaciones")
            ->with("comments")
            ->with("favoritos")
            ->with("categorias")
            ->with("tags")
            ->where("posts.estado","=","publicado")
            ->select("posts.*", "users.name", "users.last_name", "users.foto as user_foto")
            ->orderBy("posts.fecha_publicacion", "desc")
            ->get();



        //\Log::debug($tag);

        $new_filter = array();

        foreach ($posts as $post) {
            //\Log::debug( $post->tags);
            $item_filter = $post->tags->filter(function ($item) use ($tag) {
                if ($item->tag == '#'.$tag) {
                    return $item;
                }
            });

            if(count($item_filter)>0){
                array_push($new_filter,$post);
            }
        }
        $categorias = Categoria::where("estado", 1)->get();

        return response()->json([
            "filter" => $new_filter,
            "posts" => $posts,
            "categorias" => $categorias,
            "ip" => $request->ip()
        ], 200);
    }
    public function filter($search)
    {
        $posts = Post::join("users", "users.id", "=", "posts.user_id")
            ->where("posts.titulo", 'like', '%' . $search . '%')
            ->orWhere("posts.contenido", 'like', '%' . $search . '%')
            ->with("visualizaciones")
            ->with("comments")
            ->with("categorias")
            ->where("posts.estado","=","publicado")
            ->select("posts.*", "users.name", "users.last_name", "users.foto as user_foto")
            ->get();

        return response()->json($posts, 200);
    }

    public function comment(Request $request)
    {
        if (!$request->autor_id) {
            $user = User::find($request->autor_id);
            $username = $user->name . " " . $user->last_name;
            $foto = $user->foto;
        } else {
            $username = "Anónimo";
            $foto = "";
        }

        Comment::create([
            "comentario" => $request->comment,
            "post_id" => $request->post_id,
            "autor" => $username,
            "foto_autor" => $foto,
            "likes" => 0
        ]);

        return response()->json(true, 200);
    }
    public function setFavorite(Request $request)
    {

        $user = auth()->user();
        if ($user) {
            $isFavorite = Favorito::where(["user_id" => $user->id, "post_id" => $request->post_id])->first();

            if ($isFavorite) {
                $isFavorite->estado = $request->estado;
                $isFavorite->save();
                return response()->json(["message" => "favorito actualizado"], 200);
            }

            Favorito::create([
                "user_id" => $user->id,
                "post_id" => $request->post_id,
                "estado" => $request->estado,
            ]);
            return response()->json(["message" => "favorito creado"], 200);
        }

        $isFavorite = Favorito::where(["ip" => $request->ip(), "post_id" => $request->post_id])->first();

        if ($isFavorite) {
            $isFavorite->estado = $request->estado;
            $isFavorite->save();
            return response()->json(["message" => "favorito actualizado"], 200);
        }

        Favorito::create([
            "ip" => $request->ip(),
            "post_id" => $request->post_id,
            "estado" => $request->estado,
        ]);
        return response()->json(["message" => "favorito creado"], 200);
    }

    public function newsletter(Request $request){
        Contactpage::create([
            "email1"=>$request->email,
            "estado"=>"Suscrito",
            "fuente"=>"Envío de formulario",
            "ultima_actividad"=>"Se creó contacto",
            "fecha_ultima_actividad"=>Carbon::now('GMT-5')->format("Y-m-d h:m:s"),
            "etiquetas"=>"Me contactó"
        ]);

        //send email for suscription

        return response()->json(true,200);
    }
}
