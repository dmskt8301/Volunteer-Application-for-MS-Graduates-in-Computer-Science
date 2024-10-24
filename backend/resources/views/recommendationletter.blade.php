<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recommendation Letter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .letter {
            margin-bottom: 20px;
        }
        .signature {
            margin-top: 40px;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img class="logo" src="https://logowik.com/content/uploads/images/uta-the-university-of-texas-at-arlington5140.jpg"
                width="200" alt="Logo">
            <h1>Recommendation Letter</h1>
        </div>
        <div class="letter">
            <p>To Whom It May Concern,</p>
            <p>I am writing to recommend <strong>{{ $studentName }}</strong> for their outstanding dedication, hard work, and exemplary performance in our volunteer program.</p>
        </div>
        <div class="signature">
            <p>Sincerely,<br/><strong>{{ $professorName }}</strong></p>
        </div>
        <div class="footer">
            <p style="font-size: 10px;">Note: This is a system-generated document and hence does not require a physical signature.</p>
        </div>
    </div>
</body>
</html>