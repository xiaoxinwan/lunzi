<template>
    <div class="col" :class="colClasses" :style="colStyle">
            <slot></slot>
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
        },
        computed:{
            colClasses(){
                let {span,offset} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`
                ]
            },
            colStyle(){
                let {gutter} = this
                return {
                    paddingLeft: gutter/2+'px',
                    paddingRight: gutter/2+'px'
                }
            }
        }


    }
</script>
<style scoped lang="scss">
    .col{

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