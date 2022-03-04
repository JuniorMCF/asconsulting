<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSesionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sesiones', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("cantidad");
            $table->timestamp("dia");
            $table->integer("tipo")->default(0);// de sitio 1  externos 0
            $table->decimal("duracion_promedio",8,2)->default(0); // duracion en segundos media
            $table->string("pagina")->nullable();
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
        Schema::dropIfExists('sesiones');
    }
}
