// SELEÇÃO DOS ELEMENTOS
const addForm = document.getElementById("form-add");
const addInputText = document.getElementById("form-input-text");
const addInputDate = document.getElementById("form-input-date");
const toDoList = document.getElementById("to-do-list");
const saveForm = document.getElementById("save-form");
let list = [];
let oldInputValue;

// FUNÇÕES
const showList = (list, divList) => {
  while (divList.firstChild) {
    divList.removeChild(divList.firstChild);
  }

  for (let i = 0; i < list.length; i++) {
    const toDo = document.createElement("div");
    toDo.classList.add("to-do");

    const toDoTitle = document.createElement("p");
    date = new Date(list[i].date);
    date.setDate(date.getDate() + 1);
    toDoTitle.textContent = `${list[i].text} - ${date.toLocaleDateString(
      "pt-BR"
    )}`;
    toDoTitle.style.paddingLeft = "1rem";
    toDo.appendChild(toDoTitle);

    divList.appendChild(toDo);
  }
};

const toggleForms = () => {
  addForm.classList.toggle("hide");
  toDoList.classList.toggle("hide");
};

const updateToDo = (text) => {
  const allToDo = document.querySelectorAll(".to-do");

  allToDo.forEach((toDo) => {
    let toDoTitle = toDo.querySelector("p");

    if (toDoTitle.innerText === oldInputValue) {
      toDoTitle.innerText = text;
    }
  });
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

const downloadListToCsv = (list) => {
  const downloadList = document.getElementById("download-list");

  
};

// EVENTOS
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTextValue = addInputText.value;
  const inputDateValue = addInputDate.value;

  if (inputTextValue) {
    list.push({
      text: inputTextValue,
      date: inputDateValue,
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
