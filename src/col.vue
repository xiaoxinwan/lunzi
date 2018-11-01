<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
        :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"
    >
        <div style="border: 1px solid dodgerblue; height: 100px ">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LunziCol',
        props: {
            span: {
                type : [Number,String]
            },
            offset: {
                type : [Number,String]
            }
        },
        data(){
            return {
                gutter: 0
            }
        }


    }
</script>
<style scoped lang="scss">
    .col{
        width: 50%;
        @for $n from 1 through 24{
            &.#{col-}#{$n} {
                width: ($n / 24) * 100%;
            }
        };
        @for $n from 1 through 24{
            &.#{offset-}#{$n} {
                margin-right: ($n / 24) * 100%;
            }
        }
    }
</style>