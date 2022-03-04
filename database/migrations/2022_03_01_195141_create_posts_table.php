<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string("foto");
            $table->text("titulo");
            $table->text("contenido")->nullable(); //guarda el html asociado a este post
            $table->string("estado")->default("borrador");//publicado, en papelera, eliminado
            $table->timestamp("fecha_publicacion")->nullable();
            $table->timestamp("fecha_creacion")->nullable();
            
            $table->timestamp("fecha_edicion")->nullable();
            $table->string("editado_por")->nullable();

            $table->integer("vistas")->unsigned()->default(0);

            $table->integer("user_id")->unsigned()->nullable();
            $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");

            //$table->integer("categoria_id")->unsigned()->nullable();
            //$table->foreign("categoria_id")->references("id")->on("categorias")->onDelete("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
