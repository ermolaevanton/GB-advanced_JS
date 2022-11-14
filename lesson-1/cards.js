'use strict';

/**
 * Возможно сделал не то как требовалось в дз (убрать атрибуты), но сделал как
 * знаю, через конструктор и метод
 */

class Product {
    constructor(id, title, price, img) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
    }
    renderProduct() {
        return `<div class="product__item">
                    <h3 class="item__header">${this.title}</h3>
                    <div class="item__img">
                        <img src="${this.img}" alt="${this.title}">
                    </div>
                    <p class="item__price">${this.price}$</p>
                    <button class="item__button">Купить</button>
                </div>`
    }
};

const products = [
    new Product(1, 'Notebook', 2000, 'img/note.jpg'),
    new Product(2, 'Mouse', 20, 'img/mouse.jpg'),
    new Product(3, 'Keyboard', 200, 'img/key.jpg'),
    new Product(4, 'Gamepad', 50, 'img/game.jpg'),
];

document.querySelector('.products').innerHTML =
    products.map(product => product.renderProduct()).join("");

