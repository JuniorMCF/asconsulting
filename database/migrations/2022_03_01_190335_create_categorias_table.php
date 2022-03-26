<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->increments("id");
            $table->string("nombre");
            $table->text("titulo")->nullable();
            $table->string("foto")->nullable();
            $table->text("descripcion")->nullable();
            $table->integer("entradas")->unsigned()->default(0);
            $table->integer("estado")->default(0);//0 deshabilitado 1 habilitado
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
        Schema::dropIfExists('categorias');
    }
}
