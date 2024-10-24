<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@volunteerapp.com',
            'gender' => 'male',
            'role' => 'admin'
        ]);

        User::factory()->create([
            'name' => 'Professor',
            'email' => 'professor@volunteerapp.com',
            'gender' => 'male',
            'role' => 'professor'
        ]);

        User::factory()->create([
            'name' => 'Student',
            'email' => 'student@volunteerapp.com',
            'gender' => 'male',
            'role' => 'student'
        ]);
    }
}
