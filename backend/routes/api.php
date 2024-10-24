<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\RecommendationLetterController;

// User API
Route::middleware('auth:sanctum')->put('/user', [UserController::class, 'updateUser']);
Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
Route::middleware('auth:sanctum')->post('/user/image', [UserController::class, 'uploadUserImage']);
Route::middleware('auth:sanctum')->delete('/user/image', [UserController::class, 'removeUserImage']);

// Admin APIs
Route::middleware('auth:sanctum')->post('/create-user', [UserController::class, 'createUser']);
Route::middleware('auth:sanctum')->put('/update-user/{userId}', [UserController::class, 'updateUserInfo']);
Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'getAllUsers']);
Route::middleware('auth:sanctum')->get('/users/{role}', [UserController::class, 'getAllUsersByRole']);

// Upload Image API
Route::middleware('auth:sanctum')->post('/upload-image', [UserController::class, 'uploadImage']);

// Remove Image API
Route::middleware('auth:sanctum')->delete('/remove-image', [UserController::class, 'removeImage']);

// Upload Document API
Route::middleware('auth:sanctum')->post('/upload-document', [UserController::class, 'uploadDocument']);

// Remove Document API
Route::middleware('auth:sanctum')->delete('/remove-document', [UserController::class, 'removeDocument']);

// APIs
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResources([
        'chats' => ChatController::class,
        'tasks' => TaskController::class,
        'reports' => ReportController::class,
        'recommendation_letters' => RecommendationLetterController::class,
    ]);

    Route::get('/chat/{senderId}/{receiverId}', [ChatController::class, 'getChatsBySenderIdAndReceiverId']);
    Route::get('/chat-list', [ChatController::class, 'getChatList']);

    Route::get('/tasks/professor/{professorId}', [TaskController::class, 'getTasksByProfessorId']);
    Route::get('/tasks/student/{studentId}', [TaskController::class, 'getTasksByStudentId']);

    Route::post('/detection', [ReportController::class, 'detection']);

    Route::get('/reports/student/{studentId}', [ReportController::class, 'getReportsByStudentId']);
    Route::get('/reports/task/{taskId}', [ReportController::class, 'getReportByTaskId']);

    Route::get('/analytics', [AnalyticsController::class, 'getAnalyticsByRole']);

    Route::get('/recommendation_letters/professor/{professorId}', [RecommendationLetterController::class, 'getRecommendationLetterByProfessorId']);
    Route::get('/recommendation_letters/student/{studentId}', [RecommendationLetterController::class, 'getRecommendationLetterByStudentId']);
});