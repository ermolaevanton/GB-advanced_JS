'use strict';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: 'json/product.json',
        cartUrl: 'json/cart.json',
        products: [],
        filtered: [],
        cartItems: [],
        userSearch: '',
        imgCatalog: {
            123: 'img/card-img-1.png',
            124: 'img/card-img-2.png',
            125: 'img/card-img-3.png',
            126: 'img/card-img-4.png',
            127: 'img/card-img-5.png',
            128: 'img/card-img-6.png',
            129: 'img/card-img-7.png',
            130: 'img/card-img-9.png',
            131: 'img/card-img-10.png',
            132: 'img/card-img-11.png',
            133: 'img/card-img-12.png',
            134: 'img/card-img-13.png'
        },
        imgCart: {
            123: 'img/card-img-1.png',
            124: 'img/card-img-2.png',
            125: 'img/card-img-3.png',
            126: 'img/card-img-4.png',
            127: 'img/card-img-5.png',
            128: 'img/card-img-6.png',
            129: 'img/card-img-7.png',
            130: 'img/card-img-9.png',
            131: 'img/card-img-10.png',
            132: 'img/card-img-11.png',
            133: 'img/card-img-12.png',
            134: 'img/card-img-13.png'
        },
        show: false,
        error: false
    },
    methods: {
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product =>
                regexp.test(product.product_name));
            console.log(this.userSearch);
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.error = true;
                })
        },
        addProduct(item) {
            this.getJson(`json/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems
                            .find(el => el.product_id === item.product_id);
                        if (find) {
                            find.quantity++;
                        } else {
                            const newProduct = Object
                                .assign(item, { quantity: 1 });
                            this.cartItems.push(newProduct);
                        }
                    } else {
                        alert('Error!');
                    }
                })
        },
        addQuantity(product) {
            this.getJson(`json/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        product.quantity++;
                    } else {
                        alert('Error!');
                    }
                })
        },
        removeQuantity(product) {
            this.getJson(`json/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        } else return;

                    } else {
                        alert('Error!');
                    }
                })
        },
        removeProduct(product) {
            this.getJson(`json/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        this.cartItems
                            .splice(this.cartItems.indexOf(product), 1);
                    } else {
                        alert('Error!');
                    }
                });
        }
    },
    mounted() {
        this.getJson(this.catalogUrl)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(this.cartUrl)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    }
})