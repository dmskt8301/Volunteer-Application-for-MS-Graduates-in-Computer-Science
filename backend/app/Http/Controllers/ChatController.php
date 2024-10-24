<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;
use App\Models\Chat;
use App\Http\Resources\ChatResource;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ChatResource::collection(Chat::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChatRequest $request)
    {
        $chat = Chat::create($request->validated());
        return new ChatResource($chat);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {
        return new ChatResource($chat);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChatRequest $request, Chat $chat)
    {
        $chat->update($request->validated());
        return new ChatResource($chat);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        $chat->delete();
        return response()->json(['message' => 'Chat deleted successfully']);
    }

    public function getChatsBySenderIdAndReceiverId($senderId, $receiverId)
    {
        $chats = Chat::where(function ($query) use ($senderId, $receiverId) {
            $query->where('senderId', $senderId)
                ->where('receiverId', $receiverId);
        })->orWhere(function ($query) use ($senderId, $receiverId) {
            $query->where('senderId', $receiverId)
                ->where('receiverId', $senderId);
        })->get();

        $userId = auth()->user()->id;
        foreach ($chats as $chat) {
            if ($chat->receiver->id == $userId) {
                $chat->update(['status' => 'read']);
            }
        }

        return ChatResource::collection($chats);
    }

    public function getChatList()
    {
        $userId = auth()->user()->id;
        $latestMessages = Chat::where('senderId', $userId)
            ->orWhere('receiverId', $userId)
            ->with('sender', 'receiver')
            ->latest()
            ->get()
            ->groupBy(function ($message) use ($userId) {
                return $message->senderId === $userId ? $message->receiverId : $message->senderId;
            });

        $chatList = [];
        foreach ($latestMessages as $contactId => $messages) {
            $sortedMessages = $messages->sortByDesc('created_at');
            $contact = $sortedMessages[0]->senderId === $userId ? $sortedMessages[0]->receiver : $sortedMessages[0]->sender;
            $unreadCount = $sortedMessages[0]->receiverId === $userId ? $sortedMessages->where('status', 'unread')->count() : 0;
            
            $latestMessageTimestamp = $sortedMessages[0]->created_at;
            
            $chatList[] = [
                'id' => $contactId,
                'name' => $contact->name,
                'image' => $contact->image,
                'message' => $sortedMessages[0]->message,
                'timestamp' => $latestMessageTimestamp,
                'unread_count' => $unreadCount,
            ];
        }
    
        usort($chatList, function($a, $b) {
            return strtotime($b['timestamp']) - strtotime($a['timestamp']);
        });

        return response()->json($chatList);
    }
}