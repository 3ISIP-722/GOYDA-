let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальное окно
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальное окно
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}
