<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('priority', ['low', 'medium', 'high']);
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->json('comments');
            $table->enum('status', ['to_do', 'assigned', 'in_progress', 'completed', 'on_hold', 'cancelled'])->default('to_do');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
