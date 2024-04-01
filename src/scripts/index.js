import {
  getData,
  postData,
  deleteTask,
  editData,
  getDataWithSearch,
} from "@/library/axios/axios";

jalaliDatepicker.startWatch();
jalaliDatepicker.updateOptions({ persianDigits: true, time: true });

let tasksArr = await getData();
localStorage.setItem("pageNumber", "1");
localStorage.setItem("rowsPerPage", "100");
renderTasks(tasksArr);
let editFlag = 0;
let showFlag = 0;
let idOftaskBeingEdited;
let idOftaskBeingDeleted;
const addTaskBtn = document.getElementById("add-task");
const overLay = document.querySelector(".overlay");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const modalForm = document.getElementById("modal-form");
  modalForm.reset();
  const modalBtnDiv = overLay.querySelector(".modal-btn");
  modalBtnDiv.classList.remove("hidden");
  const modalBtn = modalBtnDiv.querySelector("button");
  modalBtn.textContent = "Add Task";
  showModal();
}

function showModal() {
  overLay.classList.remove("hidden");
}

const closeModalBtn = document.getElementById("closeModal");
closeModalBtn.addEventListener("click", hideModal);

function hideModal() {
  overLay.classList.add("hidden");
}

const modalForm = document.getElementById("modal-form");
modalForm.addEventListener("submit", handleModalForm);

async function handleModalForm(e) {
  e.preventDefault();
  const { taskName, priority, status, date } = e.target;
  if (editFlag === 0 && showFlag === 0) {
    let task = {
      name: taskName.value,
      priority: priority.value,
      status: status.value,
      date: date.value,
      id: new Date().getTime() % 10000,
    };
    await postData(task);
  } else if (showFlag === 0) {
    const updatedTask = {
      name: taskName.value,
      priority: priority.value,
      status: status.value,
      date: date.value,
    };
    await editData(idOftaskBeingEdited, updatedTask);
    editFlag = 0;
  } else {
    showFlag = 0;
  }
  e.target.reset();
  hideModal();
  tasksArr = await getData();
  renderTasks(tasksArr);
}

async function renderTasks(arr) {
  await pagination();
  const rowsPerPage = Number(localStorage.getItem("rowsPerPage"));
  const pageNumber = Number(localStorage.getItem("pageNumber"));
  const numberOfTasks = Number(localStorage.getItem("numberOfTasks"));
  console.log(numberOfTasks);
  const startIndex = (pageNumber - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginationStart = document.getElementById("pagination-start");
  paginationStart.textContent = startIndex + 1;
  const paginationEnd = document.getElementById("pagination-end");
  paginationEnd.textContent =
    endIndex > numberOfTasks ? numberOfTasks : endIndex;
  const slicedArr = arr.slice(startIndex, endIndex);
  const tasksTable = document.getElementById("tasks-table");
  const tasksTableBody = tasksTable.querySelector("tbody");
  tasksTableBody.innerHTML = "";
  slicedArr.forEach((task) => {
    const taskRow = document.createElement("tr");
    taskRow.id = task.id;
    const taskNameCell = document.createElement("td");
    taskNameCell.classList.add("body-cell");
    const taskNameP = document.createElement("p");
    taskNameP.classList.add("task-name");
    taskNameP.textContent = task.name;
    taskNameCell.append(taskNameP);

    const priorityCell = document.createElement("td");
    priorityCell.classList.add("body-cell");
    const priorityP = document.createElement("p");
    priorityP.classList.add(`${task.priority}-priority`);
    priorityP.textContent = task.priority;
    priorityCell.append(priorityP);

    const statusCell = document.createElement("td");
    statusCell.classList.add("body-cell");
    const statusP = document.createElement("p");
    statusP.classList.add(`${task.status}-status`);
    statusP.textContent = task.status;
    statusCell.append(statusP);

    const dateCell = document.createElement("td");
    dateCell.classList.add("body-cell");
    const dateP = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = task.date;
    dateCell.append(dateP);

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("body-cell");
    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("flex", "gap-1", "justify-center");

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.src = "./src/assets/icons/delete.svg";
    deleteBtn.alt = "delete";
    deleteBtn.addEventListener("click", handleDelete);

    const editBtn = document.createElement("img");
    editBtn.classList.add("edit-btn");
    editBtn.src = "./src/assets/icons/edit.svg";
    editBtn.alt = "edit";
    editBtn.addEventListener("click", handleEdit);

    const showBtn = document.createElement("img");
    showBtn.classList.add("show-btn");
    showBtn.src = "./src/assets/icons/show.svg";
    showBtn.alt = "show";
    showBtn.addEventListener("click", handleShow);

    actionsWrapper.append(deleteBtn, editBtn, showBtn);
    actionsCell.append(actionsWrapper);

    taskRow.append(
      taskNameCell,
      priorityCell,
      statusCell,
      dateCell,
      actionsCell
    );
    tasksTableBody.append(taskRow);
  });
}

const deleteOverlay = document.querySelector(".delete-overlay");
const closeDeleteModal = document.getElementById("closeDeleteModal");
const confirmationBtn = document.getElementById("confirmation");
const rejectionBtn = document.getElementById("rejection");

confirmationBtn.addEventListener("click", deleteConfirmed);
rejectionBtn.addEventListener("click", hideDeleteModal);
closeDeleteModal.addEventListener("click", hideDeleteModal);

function hideDeleteModal() {
  deleteOverlay.classList.add("hidden");
}

function showDeleteModal() {
  deleteOverlay.classList.remove("hidden");
}

function handleDelete(e) {
  idOftaskBeingDeleted = e.target.parentElement.parentElement.parentElement.id;
  showDeleteModal();
}

async function deleteConfirmed() {
  await deleteTask(idOftaskBeingDeleted);
  tasksArr = await getData();
  renderTasks(tasksArr);
  hideDeleteModal();
}

function handleShow(e) {
  showFlag = 1;
  auxiliaty(e);
  const modalBtnDiv = overLay.querySelector(".modal-btn");
  modalBtnDiv.classList.add("hidden");
  showModal();
}

function handleEdit(e) {
  const modalBtnDiv = overLay.querySelector(".modal-btn");
  modalBtnDiv.classList.remove("hidden");
  const modalBtn = modalBtnDiv.querySelector("button");
  modalBtn.textContent = "Edit Task";
  idOftaskBeingEdited = auxiliaty(e);
  showModal();
  editFlag = 1;
}

function auxiliaty(e) {
  const taskId = e.target.parentElement.parentElement.parentElement.id;
  const taskObj = tasksArr.find((task) => String(task.id) === taskId);
  const taskName = overLay.querySelector("input[name='taskName']");
  taskName.value = taskObj.name;
  const taskPriority = overLay.querySelector("select[name='priority']");
  taskPriority.value = taskObj.priority;
  const taskStatus = overLay.querySelector("select[name='status']");
  taskStatus.value = taskObj.status;
  const taskDate = overLay.querySelector("input[name='date']");
  taskDate.value = taskObj.date;

  return Number(taskId);
}

//////////////////////////////////////

const searchForm = document.getElementById("search");

searchForm.addEventListener("submit", handleSearch);

async function handleSearch(e) {
  e.preventDefault();
  const { searchQuery } = e.target;
  const searchResult = await getDataWithSearch(searchQuery.value);
  renderTasks(searchResult);
}

//////////////////////////////////////

const paginationTotal = document.getElementById("pagination-total");
const paginationSelect = document.getElementById("pagination-select");
const paginationNext = document.getElementById("pagination-next");
const paginationPrevious = document.getElementById("pagination-previous");

paginationSelect.addEventListener("change", handlePaginationSelect);

function handlePaginationSelect() {
  localStorage.setItem("rowsPerPage", paginationSelect.value);
  renderTasks(tasksArr);
}

paginationNext.addEventListener("click", handleNextPage);

function handleNextPage() {
  const rrp = Number(localStorage.getItem("rowsPerPage"));
  const numOfTasks = Number(localStorage.getItem("numberOfTasks"));
  const maxNumOfpages =
    Math.floor(numOfTasks / rrp) !== numOfTasks / rrp
      ? Math.floor(numOfTasks / rrp) + 1
      : numOfTasks / rrp;
  let num = Number(localStorage.getItem("pageNumber"));
  if (num < maxNumOfpages) {
    num++;
    localStorage.setItem("pageNumber", num);
    renderTasks(tasksArr);
  }
}

paginationPrevious.addEventListener("click", handlePreviousPage);

function handlePreviousPage() {
  let num = Number(localStorage.getItem("pageNumber"));
  if (num > 1) {
    num--;
    localStorage.setItem("pageNumber", num);
    renderTasks(tasksArr);
  }
}

async function pagination() {
  // Pagination Text - Total
  const tasks = await getData();
  const numberOfTasks = tasks.length;
  console.log("pagnum " + numberOfTasks);
  localStorage.setItem("numberOfTasks", numberOfTasks);
  paginationTotal.textContent = numberOfTasks;
}
