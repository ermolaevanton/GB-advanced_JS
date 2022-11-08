'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cart: [],
        imgCatalog: 'https://via.placeholder.com/520x400',
        userSearch: '',
        show: false,
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
                })
        },
        addProduct(product) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cart
                            .find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            const newProduct = Object
                                .assign(product, { quantity: 1 });
                            this.cart.push(newProduct);
                        }
                    } else {
                        alert('Error!');
                    }
                })
        },
        addQuantity(product) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        product.quantity++;
                    } else {
                        alert('Error!');
                    }
                })
        },
        removeQuantity(product) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (product.quantity > 0) {
                            product.quantity--;
                        } else return;

                    } else {
                        alert('Error!');
                    }
                })
        },
        removeProduct(product) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        this.cart.splice(this.cart.indexOf(product), 1);
                    } else {
                        alert('Error!');
                    }
                });
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart.push(el);
                }
            });
        console.log(this.cart);
    }
})








