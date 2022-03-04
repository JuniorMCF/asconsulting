<?php

use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\Web\ContactoController;
use App\Http\Controllers\API\Web\PostsController;
use App\Http\Controllers\API\Web\PublicPostController;
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

Route::post('login', [AuthController::class, 'login']);



Route::post("post/document",[PublicPostController::class,"show"]);

Route::post("contacto",[ContactoController::class,"create"]);


Route::group([
    'prefix' => 'oauth'
], function () {


    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::post('logout', [AuthController::class, 'logout']);

        Route::get('posts/pub', [PostsController::class, "postsPub"]);
        Route::get('post/{id}',[PostsController::class,"show"]);
        Route::post('post/add/tag',[PostsController::class,"addTag"]);
        Route::post('post/delete/tag',[PostsController::class,"deleteTag"]);
        Route::post('post/blog',[PostsController::class,"postBlog"]);
        Route::post('post/save',[PostsController::class,"savePost"]);
        Route::post('post/categorias',[PostsController::class,"savePostCategorias"]);
    });
});
