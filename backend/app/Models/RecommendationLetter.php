<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecommendationLetter extends Model
{
    use HasFactory;

    protected $fillable = [
        'professor_id',
        'user_id',
        'letter',
    ];

    public function professor()
    {
        return $this->belongsTo(User::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
