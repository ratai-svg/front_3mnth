const input = document.getElementById("inputBlock");

input.addEventListener("input", function () {
    const color = input.value.trim();

    document.body.style.backgroundColor = color;

    if (document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "white";
    }
});
