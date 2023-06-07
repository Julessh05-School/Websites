<!DOCTYPE html>
<html>

<head>
    <title>PHP - Variablen (1)</title>
    <meta charset="utf-8">
</head>

<body>
    <h1>Mitternachtsformel</h1>
    <?php

        /*
            Autor: Max Mustermann
            erstellt am: 19.01.2023
        */

        // Wertzuweisung
        $a = 1;
        $b = 3; 
        $c = 2;

        $radikand = $b*$b - 4*$a*$c;
        
        /*
        Wichtig!!!
        Die Bedeutung von "sqrt()" habe ich auf der 
        Seite https://www.php.net/manual/de/function.sqrt.php 
        nachgeschlagen
        */

        $x1 = (-$b + sqrt($radikand)) / (2*$a);

        $x2 = (-$b - sqrt($radikand)) / (2*$a);

        // Hier wird das Ergebnis ausgegeben
        echo "<strong>1. Nullstelle:</strong> $x1";
        echo "<br>";
        echo "<strong>2. Nullstelle</strong>  $x2";

    ?>
</body>

</html>