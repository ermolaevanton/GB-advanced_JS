'use strict';

const api = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
        this.getSumProducts();
    }
    _getProducts() {
        return fetch(`${api}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            console.log(item);
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
    constructor(product, img = 'https://via.placeholder.com/520x400') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product__item">
                    <h3 class="item__header">${this.title}</h3>
                    <div class="item__img">
                        <img src="${this.img}" alt="${this.title}">
                    </div>
                    <p class="item__price">${this.price}$</p>
                    <button class="item__button"  data-id="${this.id}">Купить</button>
                </div>`
    }
};

class CartList {
    constructor(id, container = '.cart') {
        this.container = container;
        this.count = 0;
        this.good = [];
        this.id = id;
        this.addProduct()
            .then(data => {
                let obj = data.filter(item => {
                    return item.id_product == this.id;
                });
                this.good = obj;
                this.render();
            });
    }

    addProduct() {
        return fetch(`${api}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    changeCountProduct() {

    }
    deleteProduct() {

    }
    render() {
        const block = document.querySelector(this.container);
        const blockCart = block.querySelector(`.cart-item[data-id="${this.id}"]`);
        if (!blockCart) {
            for (let product1 of this.good) {
                const item = new CartItem(product1);
                block.insertAdjacentHTML('beforeend', item.render());
                console.log(item);
            }
        }
        this.count++;
        console.log(this.count);

    }
}

class CartItem extends CartList {
    constructor(product1, img = 'https://via.placeholder.com/520x400', count) {
        super(count);
        this.title = product1.product_name;
        this.id = product1.id_product;
        this.price = product1.price;
        this.img = img;
    }
    render() {
        return `<div class="cart-item" data-id="${this.id}">
                    <div class="cart__img">
                        <img src="${this.img}" alt="img">
                    </div>
                    <div class="cart__info">
                        <h2 class="cart__title">${this.title}</h2>
                        <p class="cart__count">Count: ${this.count}</p>
                    </div>
                    <div class="cart__right">
                        <button class="cart__x">X</button>
                        <p class="cart__price">${this.price}$</p>
                    </div>
                </div>`
    }
}


const list = new ProductList();
// console.log(list);
// const cart1 = new CartItem();
// console.log(cart1);




