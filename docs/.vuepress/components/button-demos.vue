<template>
    <div>
        <p><strong>预览</strong></p>
        <div>
            <g-button>默认按钮</g-button>
            <g-button :load="true">默认按钮</g-button>
            <g-button icon="error">默认按钮</g-button>
            <g-button disabled>默认按钮</g-button>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{buttonContent}}</code></pre>

        <h3>按钮组合</h3>
        <p><strong>预览</strong></p>
        <div style="padding-top: .5em;">
            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{buttonGroupContent}}</code></pre>


    </div>

</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components: {
            'g-button': Button,
            'g-button-group': ButtonGroup
        },
        data() {
            return {
                buttonContent: `
        <g-button>默认按钮</g-button>
        <g-button :load="true">默认按钮</g-button>
        <g-button icon="error">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
                `.replace(/\t+| +/g, '').trim(),
                buttonGroupContent:`
                <g-button-group>
                        <g-button icon="left">上一页</g-button>
                        <g-button icon="right" icon-position="right">下一页</g-button>
                   </g-button-group>
                `.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>