<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\ChatSeeder;
use Database\Seeders\ReportSeeder;
use Database\Seeders\TaskSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\RecommendationLetterSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            ChatSeeder::class,
            TaskSeeder::class,
            ReportSeeder::class,
            RecommendationLetterSeeder::class
        ]);
    }
}
