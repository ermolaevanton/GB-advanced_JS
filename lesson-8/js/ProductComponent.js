
Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
                    <product v-for="item of products"
                    :key="item.product_id"
                    :img="img[item.product_id]"
                    :product="item"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-card">
                    <a class="product-card__link" href="Product.html">
                        <img class="product-card-img" :src="img" alt="card">
                        <div class="product-card__txt">
                            <h3 class="card__txt-header">{{product.product_name}}</h3>
                            <p class="card__txt-p">{{product.product_specification}}</p>
                            <p class="card__txt-price">$ {{product.product_price}}</p>
                        </div>
                    </a>
                    <div class="product-card-button-box">
                        <button class="product-card-button" @click="$parent.$emit('add-product', product)">
                            <img class="product-card-button__img" src="img/img_menu/korzina.svg" alt="korzina">
                            <p class="product-card-button__txt">Add to Cart</p>
                        </button>
                    </div>
</div>`
});