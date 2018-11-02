<template>
    <div class="col" :class="colClasses" :style="colStyle">
            <slot></slot>
    </div>
</template>
<script>
    let validator = (value)=>{
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if(!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'LunziCol',
        props: {
            span: {
                type : [Number,String]
            },
            offset: {
                type : [Number,String]
            },
            phone: {type: Object, validator,},
            ipad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            widePc: {type: Object, validator}
        },
        data(){
            return {
                gutter: 0
            }
        },
        computed:{
            colClasses(){
                let {span,offset,phone,ipad,narrowPc,widePc} = this

                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ... (phone ? [`col-phone-${phone.span}`] : []),
                    ... (ipad ? [`col-ipad-${ipad.span}`] : []),
                    ... (narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
                    ... (widePc ? [`col-wide-pc-${widePc.span}`] : []),
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

        @media (min-width: 0) {
            // col-phone-
            @for $n from 1 through 24{
                &.#{col-phone-}#{$n} {
                    width: ($n / 24) * 100%;
                }
            };
            @for $n from 1 through 24{
                &.#{offset-phone-}#{$n} {
                    margin-right: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 577px) {
            // col-ipad-
            @for $n from 1 through 24{
                &.#{col-ipad-}#{$n} {
                    width: ($n / 24) * 100%;
                }
            };
            @for $n from 1 through 24{
                &.#{offset-ipad-}#{$n} {
                    margin-right: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            // col-pc-
            @for $n from 1 through 24{
                &.#{col-pc-}#{$n} {
                    width: ($n / 24) * 100%;
                }
            };
            @for $n from 1 through 24{
                &.#{offset-pc-}#{$n} {
                    margin-right: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            // col-wide-pc-
            @for $n from 1 through 24{
                &.#{col-wide-pc-}#{$n} {
                    width: ($n / 24) * 100%;
                }
            };
            @for $n from 1 through 24{
                &.#{offset-wide-pc-}#{$n} {
                    margin-right: ($n / 24) * 100%;
                }
            }
        }
    }
</style>