const inputCreateElement = document.querySelector("#todo-input");
const buttonCreateElement = document.querySelector("#todo-form button");
const todoListElement = document.querySelector("#todo-list");

buttonCreateElement.addEventListener("click", (event) => {
    event.preventDefault();

    const taskText = inputCreateElement.value.trim();
    if (!taskText) return;

    const taskElement = document.createElement("li");

    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");

    const nameElement = document.createElement("span");
    nameElement.textContent = taskText;

    const deleteElement = document.createElement("button");
    deleteElement.textContent = "x";

    taskElement.append(checkboxElement, nameElement, deleteElement);
    todoListElement.append(taskElement);
    inputCreateElement.value = "";

    deleteElement.addEventListener("click", () => {
        taskElement.remove();
    });

    checkboxElement.addEventListener("change", () => {
        if (checkboxElement.checked) {
            taskElement.classList.add("completed");
            alert(`Задача "{taskText}" успешно выполнена`);
        } else {
            taskElement.classList.remove("completed");
        }
    });
});
