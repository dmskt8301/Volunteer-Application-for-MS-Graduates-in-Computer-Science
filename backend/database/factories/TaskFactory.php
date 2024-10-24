<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $start_date = $this->faker->dateTimeBetween('-1 month', 'now');
        $end_date = $this->faker->dateTimeBetween($start_date, '+1 month');
        $created_by = User::all()->random()->id;
        $user_id = User::where('role', 'student')->get()->random()->id;
        $comment_user_id = User::all()->random()->id;

        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->sentence(),
            'start_date' => $start_date,
            'end_date' => $end_date,
            'priority' => $this->faker->randomElement(['low', 'medium', 'high']),
            'created_by' => $created_by,
            'user_id' => $user_id,
            'comments' => [
                [
                    'user_id' => $comment_user_id,
                    'comment' => $this->faker->sentence(),
                ]
            ],
            'status' => $this->faker->randomElement(['to_do', 'assigned', 'in_progress', 'completed', 'on_hold', 'cancelled']),
        ];
    }
}
