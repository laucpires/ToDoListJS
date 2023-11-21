<!DOCTYPE html>
<html>

<head>
    <?php include "/home/laura.pires/ToDoLau/includes/links.php"; ?>
</head>

<body>
    <form id="form-add">
        <p>Adicione a sua tarefa:</p>
        <div class="form-control">
            <input type="text" id="form-input-text" placeholder="Escreva a descrição da tarefa aqui...">
            <input type="date" id="form-input-date" max="9999-12-31" title="Data de Conclusão">
            <button type="submit" id="save-task">
                <i class="fa-solid fa-check"></i>
            </button>
        </div>
    </form>
</body>

</html>
