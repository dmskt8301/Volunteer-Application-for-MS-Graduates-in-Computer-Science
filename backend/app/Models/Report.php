<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Task;
use App\Models\User;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'user_id',
        'attachment',
        'hours_spent',
        'detection',
        'feedback',
        'status',
    ];

    protected $casts = [
        'detection' => 'array',
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
