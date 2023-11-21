<!DOCTYPE html>
<html>

<head>
    <?php
    require_once "../config/config.php";
    include "../includes/links.php";
    ?>
    <link rel="shortcut icon" href="../public/assets/img/lista-de-controle.png" type="image/x-icon">
    <title>To Do Lau</title>
</head>

<body>
    <div class="container">
        <header>
            <h1>To Do List</h1>
        </header>
        <?php
        include "../app/views/AddTask.php";
        include "../app/views/TaskList.php";
        ?>
    </div>
</body>

</html>
