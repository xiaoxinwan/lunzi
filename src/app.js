import Vue from 'vue'
import Button from './button'
import Icon from  './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        load1: true,
        load2: false,
        load3: true
    }
})

import chai from 'chai'
const expect = chai.expect
// 单元测试

{   // 测试Button的icon种类
    const Constructor = Vue.extend(Button)  //将Button组件变成构造函数
    const vm = new Constructor({   // 创建实例
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
{   //测试Button的load-icon
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            load: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-load')
    vm.$el.remove()
    vm.$destroy()
}
{   //测试icon的order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)  //将Button组件变成构造函数
    const vm = new Constructor({   // 创建实例
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{   //测试icon的order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)  //将Button组件变成构造函数
    const vm = new Constructor({   // 创建实例
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{   //测试点击事件
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'setting'
        }
    })
    vm.$mount()
    vm.$on('click', function () {
        expect(1).to.eq(1)
    })
    //希望上面那句运行就好
    let button = vm.$el
    button.click()
}