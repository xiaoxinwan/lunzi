<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name: 'LunziIcon',
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>