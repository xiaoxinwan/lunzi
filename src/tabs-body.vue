<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'LunziTabsBody',
        props: {},
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name) => {
            })
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-body {
        margin: 10px 0;
    }
</style>