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
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('senderId');
            $table->unsignedBigInteger('receiverId');
            $table->text('message');
            $table->enum('status', ['unread', 'read'])->default('unread');
            $table->timestamps();

            $table->foreign('senderId')->references('id')->on('users');
            $table->foreign('receiverId')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
