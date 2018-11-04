<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'LunziToast'
    }
</script>
<style scoped lang="scss">
    .toast {
        position: fixed; top: 0; left: 50%; transform: translateX(-50%); font-size: 14px;
        line-height: 1.8; height: 40px ;display: flex; align-items: center;
        background: rgba(0, 0, 0, 0.75); box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        border-radius: 4px; padding: 0 16px; color: #fff;
    }
</style>