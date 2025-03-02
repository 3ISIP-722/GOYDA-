        // Логика добавления в избранное
        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('added');
                button.textContent = button.classList.contains('added') ? '💖' : '❤️';
            });
        });

        // Обновление значения слайдера
        const deliverySlider = document.getElementById('delivery');
        const deliveryValue = document.getElementById('delivery-value');
        deliverySlider.addEventListener('input', function () {
            deliveryValue.textContent = `${deliverySlider.value} дней`;
        });


        function changeQuantity(button, change) {
            const quantitySpan = button.parentElement.querySelector('span');
            let quantity = parseInt(quantitySpan.textContent);
            
            quantity = Math.max(1, quantity + change);
            quantitySpan.textContent = quantity;
        }

        function addToCart(button) {
            const card = button.closest('.product-card');
            const productId = card.dataset.id;
            const productName = card.querySelector('h3').textContent;
            const price = parseInt(card.querySelector('.price').textContent);
            const quantity = parseInt(card.querySelector('.quantity-control span').textContent);

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const src_ = card.querySelector('.product-images img');
            const src = src_.getAttribute('src');
            console.log(src)



            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity = quantity;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: price,
                    quantity: quantity,
                    src: src
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Товар добавлен в корзину!');
        }

function goToCart() {
    window.location.href = 'cart.html';
}

// Получаем элементы
const logo = document.querySelector('.logo');
const sidebar = document.querySelector('.sidebar');

// Добавляем обработчик события на клик
logo.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Переключаем класс 'open'
});
