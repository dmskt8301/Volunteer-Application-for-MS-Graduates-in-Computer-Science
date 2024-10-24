<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Task;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Report>
 */
class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $task_id = Task::all()->random()->id;
        $user_id = User::all()->random()->id;
        return [
            'task_id' => $task_id,
            'user_id' => $user_id,
            'attachment' => $this->faker->imageUrl(),
            'hours_spent' => $this->faker->numberBetween(1, 21),
            'detection' => [
                'score' => $this->faker->randomFloat(null, 0, 1),
                'label' => $this->faker->randomElement(['Human-Generated','AI-Generated']),
            ],
            'feedback' => $this->faker->sentence(),
            'status' => $this->faker->randomElement(['pending', 'completed', 'rejected']),
        ];
    }
}
