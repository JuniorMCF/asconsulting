<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBorradoresCategoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('borradores_categorias', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->integer("categoria_id")->unsigned()->nullable();
            $table->bigInteger("borrador_id")->unsigned()->nullable();

            $table->string("estado")->nullable();


            $table->foreign("categoria_id")->references("id")->on("categorias")->onDelete("cascade");
            $table->foreign("borrador_id")->references("id")->on("borradores")->onDelete("cascade");
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
        Schema::dropIfExists('borradores_categorias');
    }
}
