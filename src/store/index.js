import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
Vue.use(Vuex);

const state = {
    latitude: '3333',
    longitude: '',
    address:'河南省郑州市金水区哦！'
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})