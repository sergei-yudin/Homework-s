const productCards = document.querySelectorAll('.product');
const cartContainer = document.querySelector('.cart__products');
const addButtons = document.querySelectorAll('.product__add');
const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const decButtons = document.querySelectorAll('.product__quantity-control_dec');

incButtons.forEach(button => {
    button.addEventListener('click', function () {
        const valueElement = this.closest('.product').querySelector('.product__quantity-value');
        let count = parseInt(valueElement.textContent);
        valueElement.textContent = count + 1;
    });
});

decButtons.forEach(button => {
    button.addEventListener('click', function () {
        const valueElement = this.closest('.product').querySelector('.product__quantity-value');
        let count = parseInt(valueElement.textContent);
        if (count > 1) {
            valueElement.textContent = count - 1;
        }
    });
});

addButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const id = product.dataset.id;
        const imgSrc = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

        let cartItem = cartContainer.querySelector(`.cart__product[data-id="${id}"]`);

        if (cartItem) {
            const countElement = cartItem.querySelector('.cart__product-count');
            let currentCount = parseInt(countElement.textContent);
            countElement.textContent = currentCount + quantity;
        } else {
            cartItem = document.createElement('div');
            cartItem.classList.add('cart__product');
            cartItem.dataset.id = id;

            const img = document.createElement('img');
            img.classList.add('cart__product-image');
            img.src = imgSrc;

            const count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.textContent = quantity;

            cartItem.appendChild(img);
            cartItem.appendChild(count);
            cartContainer.appendChild(cartItem);
        }
    });
});