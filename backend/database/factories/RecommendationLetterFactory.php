<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RecommendationLetter>
 */
class RecommendationLetterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $professor_id = User::all()->random()->id;
        $user_id = User::all()->random()->id;
        return [
            'professor_id' => $professor_id,
            'user_id' => $user_id,
            'letter' => $this->faker->imageUrl(),
        ];
    }
}
