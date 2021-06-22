import Vuex from 'vuex';
import Vue from 'vue';
import proucts from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        proucts
    }
});