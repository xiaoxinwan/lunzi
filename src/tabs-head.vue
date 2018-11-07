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
                console.log(item);
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
            width: 70px;
            border-bottom: 2px solid $blue;
        }
        > .actions-wrapper{
            margin-left: auto;
            padding-right: 1em;
        }
    }
</style>