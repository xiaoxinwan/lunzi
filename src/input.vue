<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
               @change="$emit('change',$event)"
               @input="$emit('input',$event)"
               @focus="$emit('focus',$event)"
               @blur="$emit('blur',$event)"
        >
        <template v-if="error">
            <icon class="iconError" name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>
<script>
    import Icon from './icon'


    export default {
        components: {Icon},
        name: 'LunziInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
            }
        }
    }
</script>
<style lang="scss" scoped>
    /*:root {*/
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-bg: white;*/
    /*--button-active-bg: #eee;*/
    /*--border-radius: 4px;*/
    /*--color: #333;*/
    /*--border-color: #999;*/
    /*--border-color-hover: #666;*/
    /*}*/
    $height: 32px;
    $border-color: #999;
    $border-radius: 4px;
    $border-color-hover: #666;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, .5);
    $red: #F1453D;

    .wrapper {
        display: inline-flex;
        align-items: center;
        font-size: $font-size;
        > :not(lastChild) {
            margin-right: .5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        .iconError {
            fill: $red;
        }
        .errorMessage {
            color: $red;
        }
    }
</style>