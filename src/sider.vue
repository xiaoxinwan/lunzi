<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
                <button @click="visible=false">close</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'LunziSider',
        data(){
            return {
                visible: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sider{
        position: relative;
        > button{
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .8s;
    }
    .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
        margin-left: -200px;
    }
</style>