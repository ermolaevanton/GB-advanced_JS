'use strict';

Vue.component('filters', {
    template: `<form action="#" class="nav-img__search-form" @submit.prevent="$parent.filter">
                    <button class="nav-img__btn-search" type="submit">
                        <img src="img/img_menu/search.svg" alt="search">
                    </button>
                    <input type="text" class="nav-img__search-field" v-model="$parent.userSearch">
                </form>`
}) 