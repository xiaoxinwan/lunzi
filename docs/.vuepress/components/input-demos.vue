<template>
    <div>
        <p><strong>预览</strong></p>
        <div>
            <g-input value="请输入"></g-input>
            <g-input value="请输入" disabled></g-input>
            <g-input value="请输入" readonly></g-input>

            <div style="padding-top: .5em;">
                <g-input value="请输入" error="账号或密码错误"></g-input>
            </div>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{inputContent}}</code></pre>

        <h3>双向绑定</h3>
        <div>
            <g-input v-model="value"></g-input>
            <span>
                value: {{value}}
            </span>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{twoContent}}</code></pre>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components:{
            'g-input': Input
        },
        data() {
            return {
                value:"1",
                inputContent:`
                    <g-input value="请输入"></g-input>
                    <g-input value="请输入" disabled></g-input>
                    <g-input value="请输入" readonly></g-input>
                    <g-input value="请输入" error="账号或密码错误"></g-input>
                `.replace(/ {8}/g, '').trim(),
                twoContent:`
                    data(){
    value:'1'
}

<g-input v-model="value"></g-input>
                `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>