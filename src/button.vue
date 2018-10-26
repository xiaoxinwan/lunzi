<template>
    <!--html-->
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon  class="icon" v-if="icon && !load" :name="icon"></g-icon>
        <g-icon class="load icon" v-if="load" name="load"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    // js
    export default {
        // props: ['icon','iconPosition']
        props: {
            icon: {},
            load:{
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value !== 'left' && value !== 'right' ? false : true;
                }

            }
        }
    }
</script>
<style lang="scss">
    /*css*/
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}

    }
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        >.icon {
            order: 1;
            margin-right: 5px;
        }
        >.content{
            order: 2;
        }
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        &.icon-right{
            >.content{
                order: 1;
            }
            >.icon{
                order: 2;
                margin-right: 0;
                margin-left: 5px;
            }
        }
        .load{
            animation: spin 1.5s infinite linear;
        }
    }

</style>