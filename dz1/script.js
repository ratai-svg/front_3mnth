let color = prompt("Введите цвет фона (red, blue, green)");

let title = document.getElementById("title");

if (
    color === "red" ||
    color === "blue" ||
    color === "green" ||
    color === "yellow" ||
    color === "black" ||
    color === "white" ||
    color === "grey"
) {
    document.body.style.backgroundColor = color;
    title.innerText = "Фон изменён на " + color;
} else {
    title.innerText = "Ошибка! Введите корректный цвет";
}
