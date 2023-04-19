<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Test Site</title>
</head>
<body>
    <h1>PHP Test</h1>    
    <p> This is a php test site</p>
    <?php
        $name = $_GET['name'];
        if ($name == 'Julian') {
            $name = "Cool";
        }
        echo "Your name is: $name"
    ?>
</body>
</html>