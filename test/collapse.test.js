const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.ok
    })
    it('可以接受selected', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-collapse :selected="selectedTab">
                <g-collapse-item title="标题1" name="1"><span id="content-1"></span></g-collapse-item>
                <g-collapse-item title="标题2" name="2"><span id="content-2"></span></g-collapse-item>
                <g-collapse-item title="标题3" name="3"><span id="content-3"></span></g-collapse-item>
            </g-collapse>
        `
        const vm = new Vue({
            el: div,
            data: {
                selectedTab: ['1', '2']
            }
        })
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('#content-1')).to.exist
            expect(vm.$el.querySelector('#content-2')).to.exist
            expect(vm.$el.querySelector('#content-3')).to.not.exist
            done()
        })
    })
    it('可以接受single', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-collapse :selected.sync="selectedTab" single>
                <g-collapse-item title="标题1" name="1"><span id="content-1"></span></g-collapse-item>
                <g-collapse-item title="标题2" name="2"><span id="content-2"></span></g-collapse-item>
                <g-collapse-item title="标题3" name="3"><span id="content-3"></span></g-collapse-item>
            </g-collapse>
        `
        const vm = new Vue({
            el: div,
            data: {
                selectedTab: ['1']
            }
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('[data-name="2"]').click()
            vm.$nextTick(() => {
                expect(vm.$el.querySelector('#content-1')).to.not.exist
                expect(vm.$el.querySelector('#content-2')).to.exist
                done()
            })
        })
    })
    it('触发update:selected事件',(done)=>{
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-collapse :selected.sync="selectedTab" @update:selected="onSelect">
                <g-collapse-item title="标题1" name="1"><span id="content-1"></span></g-collapse-item>
                <g-collapse-item title="标题2" name="2"><span id="content-2"></span></g-collapse-item>
                <g-collapse-item title="标题3" name="3"><span id="content-3"></span></g-collapse-item>
            </g-collapse>
        `
        const callback = sinon.fake()
        const vm = new Vue({
            el: div,
            data: {
                selectedTab: ['1']
            },
            methods:{
              onSelect: callback
            }
        })
        vm.$nextTick(()=>{
            vm.$el.querySelector('[data-name="2"]').click()
            vm.$nextTick(() => {
                expect(callback).to.have.been.called
                done()
            })
        })
    })
})