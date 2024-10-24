<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Models\User;

class ReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'task' => TaskResource::make(Task::find($this->task_id)),
            'user' => User::find($this->user_id),
            'attachment' => $this->attachment,
            'hours_spent' => $this->hours_spent,
            'detection' => $this->detection,
            'feedback' => $this->feedback,
            'status' => $this->status,
        ];
    }
}
