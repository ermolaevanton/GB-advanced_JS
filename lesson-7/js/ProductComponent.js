'use strict';

Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
                    <product v-for="item of products"
                    :key="item.id_product"
                    :img="img[item.id_product]"
                    :product="item"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product__item">
                    <h3 class="item__header">{{product.product_name}}</h3>
                    <div class="item__img">
                        <img :src="img" alt="img">
                    </div>
                    <p class="item__price">{{product.price}}$</p>
                    <button class="btn item__button" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>`
});