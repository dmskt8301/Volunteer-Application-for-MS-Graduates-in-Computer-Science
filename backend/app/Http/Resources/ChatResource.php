<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;

class ChatResource extends JsonResource
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
            'sender' => User::find($this->senderId),
            'receiver' => User::find($this->receiverId),
            'message' => $this->message,
            'timestamp' => $this->created_at,
            'status' => $this->status,
        ];
    }
}
