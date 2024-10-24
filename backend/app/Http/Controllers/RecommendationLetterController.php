<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRecommendationLetterRequest;
use App\Http\Requests\UpdateRecommendationLetterRequest;
use App\Models\RecommendationLetter;
use App\Http\Resources\RecommendationLetterResource;
use App\Models\User;

class RecommendationLetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $total = request('total', 10);
        return RecommendationLetterResource::collection(RecommendationLetter::paginate($total));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecommendationLetterRequest $request)
    {
        if($request->validated()) {
            $professor_id = request('professor_id');
            $student_id = request('user_id');
        
            $professorName = User::find($professor_id)->name;
            $studentName = User::find($student_id)->name;
        
            $directory = public_path('recommendation-letters/');
            if (!file_exists($directory)) {
                mkdir($directory, 0777, true);
            }
        
            $pdf = \PDF::loadView('recommendationletter', compact('professorName', 'studentName'));
            $pdfPath = 'recommendation-letters/' . $studentName . '-' . $professorName . '.pdf';
            $pdf->save(public_path($pdfPath));
        
            $recommendationLetter = new RecommendationLetter();
            $recommendationLetter->professor_id = $professor_id;
            $recommendationLetter->user_id = $student_id;
            $recommendationLetter->letter = $pdfPath;
            $recommendationLetter->save();
        
            return new RecommendationLetterResource($recommendationLetter);    
        }
        return response()->json(['message' => 'Recommendation Letter not created!' ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(RecommendationLetter $recommendationLetter)
    {
        return new RecommendationLetterResource($recommendationLetter);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecommendationLetterRequest $request, RecommendationLetter $recommendationLetter)
    {
        $recommendationLetter->update($request->validated());
        return new RecommendationLetterResource($recommendationLetter);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RecommendationLetter $recommendationLetter)
    {
        $recommendationLetter->delete();
        return response()->json(['message' => 'Recommendation Letter revoked Successfully!']);
    }

    public function getRecommendationLetterByProfessorId($professorId)
    {
        $total = request('total', 10);
        return RecommendationLetterResource::collection(RecommendationLetter::where('professor_id', $professorId)->paginate($total));
    }

    public function getRecommendationLetterByStudentId($studentId)
    {
        $total = request('total', 10);
        return RecommendationLetterResource::collection(RecommendationLetter::where('user_id', $studentId)->paginate($total));
    }
}
