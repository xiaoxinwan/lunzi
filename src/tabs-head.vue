<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
    export default {
        name: 'LunziTabsHead',
        props: {}
    }
</script>
<style lang="scss" scoped>
    .tabs-head{

    }
</style>