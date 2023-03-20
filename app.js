let showModalBtn = document.querySelector(".show");
let modalElem = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".modal-close");
let modalInput = document.querySelector(".modal-inpt");
let modalAddBtn = document.querySelector(".modal-btn");
// add todo
let noStatusElem = document.querySelector(".noStatusCol");
let addedNotif = document.querySelector(".added-notif ");
let lineElem = document.querySelector(".line");
// drag & drop
let sectionElem = document.querySelectorAll(".section");
// delete
let imgSrc = "icons8-cancel-30.png";

// show and close modal
function showModal() {
  modalElem.classList.add("show-modal");
}
function closeModal() {
  modalElem.classList.remove("show-modal");
}

// add todo
let i = 0;
modalAddBtn.addEventListener("click", function () {
  if (modalInput.value == "") {
    return false;
  }
  i++; // for dataTransfer
  let newTodo = document.createElement("div");
  let deleteTodo = document.createElement("img");
  newTodo.innerHTML = modalInput.value;
  newTodo.setAttribute("draggable", true);
  newTodo.setAttribute("id", i);
  newTodo.classList.add("newTodo");
  noStatusElem.append(newTodo);
  modalInput.value = "";
  //delete
  deleteTodo.setAttribute("src", imgSrc);
  newTodo.append(deleteTodo);
  deleteTodo.classList.add("trash-btn");
  deleteTodo.addEventListener("click", function () {
    newTodo.classList.add("hide-todo");
    setTimeout(() => {
      newTodo.remove();
    }, 400);
  });
  // notif
  addedNotif.style.opacity = "1";
  addedNotif.style.transform = "translateX(0) translate(-50%)";
  setTimeout(() => {
    addedNotif.style.opacity = "0";
    addedNotif.style.transform = "translateX(120px) translate(-50%)";
  }, 800);
});

// Drag & Drop
sectionElem.forEach(function (section) {

  section.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  section.addEventListener("dragstart", function (event) {
    console.log("dragS");
    event.dataTransfer.setData("elemID", event.target.id);
  });

  section.addEventListener("drop", function (event) {
    console.log("drop");
    let targetId = event.dataTransfer.getData("elemID");
    let targetElem = document.getElementById(targetId);
    // avoid drag nulls :/
    if (targetId !== "") {
      section.append(targetElem);
    }
    
  });
});

showModalBtn.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", closeModal);
