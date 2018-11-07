<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
    export default {
        name: 'LunziTabsHead',
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name);
            })
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-head {

    }
</style>