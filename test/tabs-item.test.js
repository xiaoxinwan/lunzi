const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    it('接收到name属性',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name:'hhh'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('hhh');
    })
    it('接收到 disable属性',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})