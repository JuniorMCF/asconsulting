<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisualizacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visualizaciones', function (Blueprint $table) {
            $table->bigIncrements("id");


            $table->timestamp("fecha_inicio")->nullable();
            $table->timestamp("fecha_fin")->nullable();
            $table->string("zip")->nullable();
            $table->string("country")->nullable();
            $table->string("city")->nullable();
            $table->string("ip")->nullable();

            $table->bigInteger("post_id")->unsigned()->nullable();
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
        Schema::dropIfExists('visualizaciones');
    }
}
