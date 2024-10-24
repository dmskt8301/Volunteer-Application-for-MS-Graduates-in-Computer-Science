<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $comments = [];
        foreach ($this->comments as $comment) {
            $comments[] = [
                'user' => User::find($comment['user_id']),
                'comment' => $comment['comment'],
            ];
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'priority' => $this->priority,
            'created_by' => User::find($this->created_by),
            'user' => User::find($this->user_id),
            'comments' => $comments,
            'status' => $this->status,
        ];
    }
}
