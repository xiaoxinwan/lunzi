import Vue from 'vue'
import Button from './button'
import Icon from  './icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)


new Vue({
    el: '#app',
    data: {
        load1: true,
        load2: false,
        load3: true
    }
})