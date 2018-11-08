<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LunziTabsHead',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item,vm) => {
                let {width,left } = vm.$el.getBoundingClientRect()
                console.log('宽'+width, '左'+left);
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;

            border-bottom: 2px solid $blue;
            transition: all 400ms;
        }
        > .actions-wrapper{
            margin-left: auto;
            padding-right: 1em;
        }
    }
</style>