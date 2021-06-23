import axios from 'axios';
import router from '../../router';

const state = {
    joke: Object,
};

const getters = {
    joke: (state) => state.joke
};

const actions = {
    async fetchJoke({commit}) {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        if (response.status === 200) {
            commit('setJoke', response.data);
        } else {
            router.push({name: 'catchAll'})
            console.log("Server error")
        }
    },
    async searchJoke({commit},searchText) {
        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
        if (response.status === 200) { 
            if (response.data.total === 0) {
                commit('setJoke',{value: 'There is no any joke with this word'})
            } else {
                commit('setJoke',response.data.result[0])
            }
        } else {
            router.push({name: 'catchAll'})
            console.log("Server error")
        }
    }
}; 

const mutations = {
    setJoke: (state, joke) => (state.joke = joke)
};

export default {
    state,
    getters,
    actions,
    mutations
};

