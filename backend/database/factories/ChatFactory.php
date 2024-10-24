<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chat>
 */
class ChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $senderId = User::all()->random()->id;
        $receiverId = User::where('id', '!=', $senderId)->inRandomOrder()->first()->id;
        return [
            'senderId' => $senderId,
            'receiverId' => $receiverId,
            'message' => $this->faker->sentence(),
            'status' => $this->faker->randomElement(['unread', 'read']),
        ];
    }
}
