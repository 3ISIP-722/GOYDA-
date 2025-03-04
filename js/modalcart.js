function openModal(product) {
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-description').innerText = product.description;
    document.getElementById('modal-category').innerText = `Категория: ${product.category}`;
    document.getElementById('modal-price').innerText = `Цена: ${product.price} ₽`;
    document.getElementById('modal-availability').innerText = product.inStock ? 'В наличии' : 'Нет в наличии';

    document.getElementById('modal').style.display = 'block'; // Показываем модальное окно
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Скрываем модальное окно
}
