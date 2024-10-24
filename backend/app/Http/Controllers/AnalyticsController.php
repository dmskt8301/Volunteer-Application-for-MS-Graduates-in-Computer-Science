<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Task;
use App\Models\Report;

class AnalyticsController extends Controller
{
    public function getAnalyticsByRole()
    {
        $user = auth()->user();
        $role = $user->role;

        if ($role === 'admin') {
            return response()->json([
                'professors' => User::where('role', 'professor')->count(),
                'students' => User::where('role', 'student')->count(),
                'tasks' => Task::count(),
                'reports_submitted' => Report::count(),
            ]);
        }
        else if ($role === 'professor') {
            return response()->json([
                'students' => User::where('role', 'student')->count(),
                'pending_tasks' => Task::where('created_by', $user->id)->whereIn('status', ['to_do', 'assigned', 'in_progress', 'on_hold'])->count(),
                'completed_tasks' => Task::where('created_by', $user->id)->where('status', 'completed')->count(),
                'reports_submitted' => Report::count(),
            ]);
        }
        else {
            return response()->json([
                'pending_tasks' => Task::whereIn('status', ['to_do', 'assigned', 'in_progress', 'on_hold'])->count(),
                'completed_tasks' => Task::where('created_by', $user->id)->where('status', 'completed')->count(),
                'hours_spent_in_this_week' => (int) Report::where('user_id', $user->id)->sum('hours_spent'),
                'reports_submitted' => Report::where('user_id', $user->id)->count(),
            ]);
        }
    }
}
