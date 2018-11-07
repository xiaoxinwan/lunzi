<template>
    <div class="tabs-item" @click="yyy">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'LunziTabsItem',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        inject: ['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                console.log(name);
            })
        },
        methods:{
            yyy(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item{

    }
</style>