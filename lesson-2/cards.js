'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.getSumProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: 'img/note.jpg' },
            { id: 2, title: 'Mouse', price: 20, img: 'img/mouse.jpg' },
            { id: 3, title: 'Keyboard', price: 200, img: 'img/key.jpg' },
            { id: 4, title: 'Gamepad', price: 50, img: 'img/game.jpg' },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    getSumProducts() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        });
        console.log(sum);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
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

class CartList {
    constructor() {

    }
    addProduct() {

    }
    changeCountProduct() {

    }
    deleteProduct() {

    }
    render() {

    }
}

class CartItem {
    constructor() {

    }
    render() {

    }
}


const list = new ProductList();



