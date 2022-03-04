<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailSesionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_sesiones', function (Blueprint $table) {
            $table->increments("id");
            $table->timestamp("dia");
            $table->string("dispositivo");
            $table->string("navegadpr");
            $table->string("país");
            $table->integer("zip_code");
            $table->decimal("duracion",8,2)->default(0); // duracion en segundos
            $table->string("pagina")->nullable();

            $table->integer("sesion_id")->unsigned()->nullable();
            $table->foreign("sesion_id")->references("id")->on("sesiones")->onDelete("cascade");

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
        Schema::dropIfExists('detail_sesiones');
    }
}
