<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\Models\Post;
use App\Models\PostCategoria;
use App\Models\Tag;
use App\Models\User;
use App\Services\PostServices;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use PDF;

class PostsController extends Controller
{
    //
    public function postsPub()
    {
        $posts = Post::where("estado", "publicado")->with("visualizaciones")
            ->with("comments")
            ->with("favoritos")
            ->with("categorias")->skip(0)->take(5)->get();

        //\Log::debug($posts);

        return response()->json($posts, 200);
    }
    public function allPosts()
    {
        $posts = Post::where("estado", "publicado")->with("visualizaciones")
            ->with("comments")
            ->with("favoritos")
            ->with("categorias")->get();

        //\Log::debug($posts);

        return response()->json($posts, 200);
    }

    public function postsEraser()
    {
        $posts = Post::where("estado", "borrador")->get();

        //\Log::debug($posts);

        return response()->json($posts, 200);
    }
    public function postsPapelera()
    {
        $posts = Post::where("estado", "papelera")->get();

        //\Log::debug($posts);

        return response()->json($posts, 200);
    }

    public function showPost($id)
    {
        $post = Post::find($id);
        $post_categorias = PostCategoria::join("categorias", "post_categorias.categoria_id", "=", "categorias.id")
            ->where("post_categorias.post_id", $id)
            ->select("categorias.*")
            ->get();
        $categorias = Categoria::where("estado", 1)->get();
        $tags = Tag::where("post_id", $id)->get();

        return response()->json([
            "tags" => $tags,
            "categorias" => $categorias,
            "post_categorias" => $post_categorias,
            "post" => $post

        ], 200);
    }

    public function addTag(Request $request)
    {

        Tag::create([
            "tag" => $request->tag,
            "post_id" => $request->post_id
        ]);
        return response()->json(true, 200);
    }

    public function deleteTag(Request $request)
    {
        Tag::find($request->id)->delete();

        return response()->json(true, 200);
    }
    public function savePost(Request $request)
    {
        $post = Post::find($request->id);

        $url_foto = $post->foto;



        if ($request->hasFile('file_upload')) {
            $this->validate($request, [
                'file_upload' => 'image|mimes:jpg,jpeg,png,gif,svg|max:2048',
            ]);

            ini_set('memory_limit', '256M');

            \File::delete($post->foto);

            $image_resize = Image::make($request->file_upload->getRealPath());
            $image_resize->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $image_resize->orientate();
            $nombre_archivo = time() . "." . $request->file_upload->extension();
            /**
             * codigo en produccion php 7.3
             *
             */

            if (!file_exists(public_path('app'))) {
                mkdir(public_path('app'), 666, true);
            }
            $image_resize->save(public_path('app/' . $nombre_archivo));

            $url_foto = '/app/' . $nombre_archivo;
        }

        $url_pdf = $post->file;

        if ($request->hasFile('file')) {
            $this->validate($request, [
                'file' => 'mimes:pdf|max:10000',
            ]);

            ini_set('memory_limit', -1);

            \File::delete($post->file);

            $file = $request->file("file");


            //$pdf = PDF::loadView('pdf.invoice', $file);


            $nombre_archivo =  time() . "." . $request->file->extension();
            $url_pdf = '/app/' . $nombre_archivo;

            file_put_contents(public_path($url_pdf), $file->getContent());
        }

        /**generamos la ruta para el post */
        $post_services = new PostServices();
        $nombre_sin_acentos  = $post_services->eliminar_acentos($request->titulo);
        $nombre_trim = trim($nombre_sin_acentos);
        $nombre_sin_espacios =  str_replace(' ', '-', $nombre_trim);
        $nombre_lowecase = strtolower($nombre_sin_espacios . '-' . str_replace(' ', '-', $request->name_district));

        $content = strip_tags( $request->contenido );
	    $word_count = str_word_count( $content );
        $tiempo_estimado = ceil($word_count / 250 );

        Post::find($request->id)->update($request->except(["file_upload", "foto", 'pdf_file', 'file']));

        Post::find($request->id)->update([
            "route" => $nombre_lowecase,
            "foto" => $url_foto,
            'file' => $url_pdf,
            'lectura'=>$tiempo_estimado
        ]);



        return response()->json(true, 200);
    }


    public function postBlog(Request $request)
    {
        Post::find($request->id)->update([
            "estado" => "publicado",
            "fecha_publicacion" => Carbon::now()->toDateTimeString()
        ]);
        return response()->json(true, 200);
    }
    public function savePostCategorias(Request $request)
    {

        $post_categorias = json_decode($request->post_categorias, true);


        $categorias = Categoria::where("estado", 1)->get();

        $delete_elements = array();
        foreach ($categorias as $categoria) {
            $count = 0;
            foreach ($post_categorias as $post_categoria) {
                /**Buscamos las categorias que no concuerden con nuestra lista de post_categorias
                 * y eliminamos los registros existenten en POSTCATEGORIAS
                 */
                if ($post_categoria["id"] == $categoria->id) {
                    $count++;
                }
            }
            if ($count == 0) {
                array_push($delete_elements, $categoria);
            }
        }

        /**ahora eliminamos los registros que existan en POSTCATEGORIAS de las categorias que no deben de estar */
        foreach ($delete_elements as $del) {
            $element = PostCategoria::where("post_id", $request->post_id)->where("categoria_id", $del["id"])->first();
            if ($element) {
                $element->delete();
            }
        }

        /**ahora procedemos a buscar si las categorias enviadas POSTCATEGORIAS no existen y las agregamos una a una */

        foreach ($post_categorias as $post_categoria) {
            $element = PostCategoria::where("post_id", $request->post_id)->where("categoria_id", $post_categoria["id"])->first();

            if (!$element) {
                PostCategoria::create([
                    "post_id" => $request->post_id,
                    "categoria_id" => $post_categoria["id"]
                ]);
            }
        }


        return response()->json(true, 200);
    }

    public function categoriasPost()
    {
        $categorias = Categoria::all();

        return response()->json($categorias, 200);
    }
    public function newPost(Request $request)
    {
        $creador = User::find($request->user_id);
        $post = new Post();
        $post->user_id = $request->user_id;
        $post->fecha_creacion = Carbon::now('GMT-5')->format("Y-m-d h:m:s");
        $post->creado_por = $creador->name . " " . $creador->last_name;
        $post->save();

        return response()->json($post->id, 200);
    }

    public function restorePost(Request $request)
    {
        Post::find($request->post_id)->update([
            "estado" => "borrador",
            "fecha_creacion" => Carbon::now('GMT-5')->format("Y-m-d h:m:s")
        ]);
        return response()->json(true, 200);
    }
    public function deletePost(Request $request)
    {
        Post::find($request->post_id)->update([
            "estado" => "eliminado"
        ]);
        return response()->json(true, 200);
    }


    public function moveTrash(Request $request)
    {
        Post::find($request->post_id)->update([
            "estado" => "papelera"
        ]);
        return response()->json(true, 200);
    }

    public function trasAll(Request $request)
    {
        //\Log::debug($request->all());
        $posts = json_decode($request->posts, true);

        foreach ($posts as $post) {
            Post::find($post["id"])->update([
                "estado" => "papelera"
            ]);
        }

        return response()->json(true, 200);
    }
    public function deleteAll(Request $request)
    {
        $posts = json_decode($request->posts, true);

        foreach ($posts as $post) {
            Post::find($post["id"])->update([
                "estado" => "eliminado"
            ]);
        }

        return response()->json(true, 200);
    }
}
