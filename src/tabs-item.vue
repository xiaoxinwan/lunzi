<template>
    <div class="tabs-item" @click="yyy" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'LunziTabsItem',
        data(){
            return {
                active: false
            }
        },
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
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            yyy() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.active {
            color: $blue;
            font-weight: bold;
        }
    }
</style>