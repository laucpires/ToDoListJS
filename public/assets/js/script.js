// SELEÇÃO DOS ELEMENTOS
const addForm = document.getElementById("form-add");
const addInputText = document.getElementById("form-input-text");
const addInputDate = document.getElementById("form-input-date");
const toDoList = document.getElementById("to-do-list");
const saveForm = document.getElementById("save-form");
const downloadList = document.getElementById("download-list");
let list = [];

// FUNÇÕES
const showList = (list, divList) => {
  while (divList.firstChild) {
    divList.removeChild(divList.firstChild);
  }

  for (let i = 0; i < list.length; i++) {
    let toDo = document.createElement("div");
    let toDoTitle = document.createElement("p");

    date = new Date(list[i]["Data"]);
    date.setDate(date.getDate() + 1);
    toDoTitle.textContent = `${list[i]["Nome"]} - ${date.toLocaleDateString(
      "pt-BR"
    )}`;
    toDoTitle.style.paddingLeft = "1rem";
    toDo.appendChild(toDoTitle);
    divList.appendChild(toDo);
  }
};

const showModal = () => {
  const modal = document.getElementById("modal");
  let span = document.getElementsByClassName("close-modal")[0];
  let taskList = document.getElementsByClassName("task-list")[0];

  modal.style.display = "block";
  showList(list, taskList);

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
};

const listToCsv = (list) => {
  let csvContent = [];

  const headers = Object.keys(list[0]);

  csvContent.push(headers.join(","));

  list.forEach((item) => {
    const values = headers.map((header) => item[header]);
    csvContent.push(values.join(","));
  });

  return csvContent.join("\n");
};

const downloadListToCsv = (list) => {
  const blob = new Blob([list], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.setAttribute("href", url);
  a.setAttribute("download", "Tarefas.csv");
  a.click();
};

// EVENTOS
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTextValue = addInputText.value;
  const inputDateValue = addInputDate.value;

  if (inputTextValue) {
    list.push({
      "Nome": inputTextValue,
      "Data": inputDateValue,
    });

    addInputText.value = "";
    addInputDate.value = "";
    addInputText.focus();

    saveForm.classList.remove("hide");

    showList(list, toDoList);
  } else {
    alert("O preenchimento da descrição da atividade é obrigatório.");
  }
});

saveForm.addEventListener("click", (e) => {
  e.preventDefault();

  showModal();
});

downloadList.addEventListener("click", (e) => {
  e.preventDefault();

  const csvData = listToCsv(list);
  downloadListToCsv(csvData);
});
