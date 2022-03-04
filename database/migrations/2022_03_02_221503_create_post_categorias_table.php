<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostCategoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_categorias', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->integer("categoria_id")->unsigned()->nullable();
            $table->bigInteger("post_id")->unsigned()->nullable();

            $table->string("estado")->nullable();


            $table->foreign("categoria_id")->references("id")->on("categorias")->onDelete("cascade");
            $table->foreign("post_id")->references("id")->on("posts")->onDelete("cascade");
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
        Schema::dropIfExists('post_categorias');
    }
}
