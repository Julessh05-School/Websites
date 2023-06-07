<!DOCTYPE html>
<html>
<head>
    <title>PHP - Ausgaben</title>
    <meta charset="utf-8">
</head>
<body>
     <h1>Kontakt:</h1>
    <?php
        $name = $_GET['name'];
        $wohnort = $_GET['wohnort'];
        $email = $_GET['email'];
        echo "Name: $name<br>";
        echo "Wohnort: $wohnort<br>";
        echo "<divider>";
        echo "E-Mail: $email<br>";

    ?>
</body>
</html>