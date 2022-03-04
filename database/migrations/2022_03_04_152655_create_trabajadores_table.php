<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrabajadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trabajadores', function (Blueprint $table) {
            $table->increments("id");
            $table->string("nombres");
            $table->string("apellidos");
            $table->string("email");
            $table->string("telefono");
            $table->string("profesion");
            $table->timestamp("fecha_inicio")->nullable();
            $table->string("documento")->nullable();
            $table->string("estado")->nullable()->default("pendiente");
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
        Schema::dropIfExists('trabajadores');
    }
}
