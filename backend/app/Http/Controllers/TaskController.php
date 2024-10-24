<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $total = request('total', 10);
        return TaskResource::collection(Task::paginate($total));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $task = Task::create($request->validated());
        return new TaskResource($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return new TaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }

    public function getTasksByProfessorId($professorId)
    {
        $total = request('total', 10);
        return TaskResource::collection(Task::where('created_by', $professorId)->paginate($total));
    }

    public function getTasksByStudentId($studentId)
    {
        $total = request('total', 10);
        return TaskResource::collection(Task::where('user_id', $studentId)->paginate($total));
    }
}
