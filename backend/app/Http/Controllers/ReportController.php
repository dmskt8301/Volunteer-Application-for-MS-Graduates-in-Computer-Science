<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReportRequest;
use App\Http\Requests\UpdateReportRequest;
use App\Models\Report;
use App\Http\Resources\ReportResource;
use DateTime;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $total = request('total', 10);
        return ReportResource::collection(Report::paginate($total));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReportRequest $request)
    {
        $report = Report::create($request->validated());
        return new ReportResource($report);
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        return new ReportResource($report);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReportRequest $request, Report $report)
    {
        $report->update($request->validated());
        return new ReportResource($report);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        $report->delete();
        return response()->json(['message' => 'Report deleted successfully']);
    }

    public function getReportsByStudentId($studentId)
    {
        $total = request('total', 10);
        $week = request('week'); // 2024-W15
        if ($week) {
            $date = new DateTime($week);
            $year = $date->format('Y');
            $weekNumber = $date->format('W');

            $start = new DateTime();
            $start->setISODate($year, $weekNumber, 1);
            $start->setTime(0, 0, 0);
            $end = clone $start;
            $end->modify('+6 days');
            $end->setTime(23,59,59,999999);

            return ReportResource::collection(Report::whereBetween('created_at', [$start, $end])->where('user_id', $studentId)->paginate($total));
        }
        return ReportResource::collection(Report::where('user_id', $studentId)->paginate($total));
    }

    public function getReportByTaskId($taskId)
    {
        $total = request('total', 10);
        return ReportResource::collection(Report::where('task_id', $taskId)->paginate($total));
    }

    public function detection()
    {
        $text = request('text');

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://writer.com/wp-admin/admin-ajax.php',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array(
                'action' => 'ai_content_detector_v2',
                'inputs' => $text,
                'token' => ''
            )
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return response()->json(json_decode($response, true));
    }
}
