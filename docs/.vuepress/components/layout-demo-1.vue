<template>
    <div>
        <p><strong>预览</strong></p>
        <g-layout style="color: white;">
            <g-header style="height: 50px; background: #3f72af;">header</g-header>
            <g-content style="height: 100px; background: #dbe2ef; padding: 0; width: 100% ;">content</g-content>
            <g-footer style="height: 50px; background: #112d4e;">footer</g-footer>
        </g-layout>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>

</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    import Sider from '../../../src/sider'

    export default {
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer,
            'g-sider': Sider
        },
        data() {
            return {
                content: `
      <g-layout style="color: white;">
        <g-header style="height: 50px; background: #3f72af;">
          header
        </g-header>
        <g-content style="height: 100px; background: #dbe2ef; padding: 0; width: 100% ;">
          content
        </g-content>
        <g-footer style="height: 50px; background: #112d4e;">
          footer
        </g-footer>
    </g-layout>
        `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
