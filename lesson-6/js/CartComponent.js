'use strict';

Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `<div class="cart-block" v-show="visibility">
                    <cart-item v-for="item of cartItems"
                    :key="item.id_product"
                    :img="img"
                    :cart-item="item"></cart-item>
                </div>`
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `<div class="cart-item">
                    <div class="cart__img">
                        <img :src="img" alt="img">
                    </div>
                    <div class="cart__info">
                        <h2 class="cart__title">{{cartItem.product_name}}</h2>
                        <p class="product-quantity">Count: {{cartItem.quantity}}</p>
                        <p>Price: {{cartItem.price}}$</p>
                    </div>
                    <div class="cart__right">
                        <button class="btn btn-x" @click="$root.removeProduct(cartItem)">&times</button>
                        <p class="product-price">{{cartItem.price * cartItem.quantity}}$</p>
                        <div class="cart-change">
                            <button class="btn btn-change" @click="$root.removeQuantity(cartItem)">-</button>
                            <button class="btn btn-change" @click="$root.addQuantity(cartItem)">+</button>
                        </div>
                    </div>
                </div>`
}); 