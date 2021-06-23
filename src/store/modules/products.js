import { products } from '../../assets/exercise'

const state = {
    products: [],
    actualProduct: Object
};

const getters = {
    allProducts: (state) => state.products,
    actualProduct: (state) => state.actualProduct
};

//actions are called from components in case of any action(lifecycle method, emitted events...)
const actions = {
    fetchProducts({commit}) {
        //fetch the products
        const _products = JSON.parse(products.value).products;
        //call the commit to add it to the state(update ui)
        commit('setProducts', _products);
    },
    getActualProduct({commit}, id) {
        commit('setActualProduct', JSON.parse(products.value).products.filter(
            (el) => el.id === id)[0])
    }
}

//mutations are update the ui
const mutations = {
    setProducts: (state, products) => (state.products = products),
    setActualProduct: (state, actualProduct) => (state.actualProduct = actualProduct)
}

export default {
    state,
    getters,
    actions,
    mutations
}