<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Web\AdminStatisticsController;
use App\Http\Controllers\Api\Web\AsesoriaController;
use App\Http\Controllers\Api\Web\CategoryController;
use App\Http\Controllers\Api\Web\ContactoController;
use App\Http\Controllers\Api\Web\ContactosController;
use App\Http\Controllers\Api\Web\PostsController;
use App\Http\Controllers\Api\Web\PublicPostController;
use App\Http\Controllers\Api\Web\StatisticsController;
use App\Http\Controllers\Api\Web\TrabajadorController;
use App\Http\Controllers\Api\Web\WritersController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('login', [AuthController::class, 'signIn']);



Route::post("post/document",[PublicPostController::class,"showDocuments"]);
Route::get("posts/all",[PublicPostController::class,"allPosts"]);
Route::get('posts/bests',[PublicPostController::class,'bestPosts']);
Route::get("posts/categoria/{categoria}",[PublicPostController::class,"filterCategory"]);
Route::get("posts/tag/{tag}",[PublicPostController::class,"filterTag"]);
Route::post("newsletter",[PublicPostController::class,"newsletter"]);

Route::get("posts/all/{search}/filter",[PublicPostController::class,"filterPosts"]);
Route::post("post/comment",[PublicPostController::class,"commentPost"]);
Route::post("post/favorite",[PublicPostController::class,"setFavorite"]);

Route::post("contacto",[ContactoController::class,"createContact"]);
Route::post("asesoria",[AsesoriaController::class,"createAdvisory"]);
Route::post("trabajador",[TrabajadorController::class,"createWorker"]);

Route::post('open-page',[StatisticsController::class,"openPage"]);
Route::post('close-page',[StatisticsController::class,"closePage"]);




Route::group([
    'prefix' => 'oauth'
], function () {


    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::post('logout', [AuthController::class, 'logoutUser']);

        Route::get('categorys/all',[CategoryController::class,"allCategorys"]);
        Route::get('posts/pub', [PostsController::class, "postsPub"]);
        Route::get('posts/all',[PostsController::class,"allPosts"]);
        Route::get('posts/eraser', [PostsController::class, "postsEraser"]);
        Route::get('posts/papelera', [PostsController::class, "postsPapelera"]);


        Route::get('post/{id}',[PostsController::class,"showPost"]);
        Route::post('post/add/tag',[PostsController::class,"addTag"]);
        Route::post('post/papelera',[PostsController::class,"moveTrash"]);
        Route::post('post/trash/all',[PostsController::class,"trasAll"]);
        Route::post('post/delete/all',[PostsController::class,"deleteAll"]);

        Route::post('post/delete/tag',[PostsController::class,"deleteTag"]);
        Route::post('post/blog',[PostsController::class,"postBlog"]);
        Route::post('post/save',[PostsController::class,"savePost"]);
        Route::post('post/restore',[PostsController::class,"restorePost"]);
        Route::post('post/delete',[PostsController::class,"deletePost"]);



        Route::post('post/new',[PostsController::class,"newPost"]);
        Route::post('post/categorias',[PostsController::class,"savePostCategorias"]);
        Route::get('categorias/post',[PostsController::class,"categoriasPost"]);
        Route::post('category',[CategoryController::class,'showCategory']);
        Route::post('category/save',[CategoryController::class,'saveCategory']);
        Route::post('category/new',[CategoryController::class,'newCategory']);
        Route::post('category/delete',[CategoryController::class,'delCategory']);


        Route::get('writers',[WritersController::class,"allWriters"]);

        Route::get('contactos/all',[ContactosController::class,"allContacts"]);


        Route::get('statistics/all',[AdminStatisticsController::class,"allStatistics"]);

        Route::get('roles',[AdminStatisticsController::class,'rolesUser']);
        Route::post('rol/update',[AdminStatisticsController::class,'updateRoleUser']);
    });
});
