<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>

    </div>
</template>
<script>
    export default {
        name: 'LunziToast',
        props: {
            autoClose: {
                type: Boolean,
                default: false
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        created() {
        },
        mounted() {
            this.execAutoClose()
            this.updateStyle()
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .toast {
        position: fixed; left: 50%; font-size: 14px;
        line-height: 1.8; min-height: 40px;display: flex; align-items: center;
        background: rgba(0, 0, 0, 0.75); box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        border-radius: 4px; padding: 0 16px; color: #fff;
        .message {
            padding: 8px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line {
            border-left: 1px solid #aaaaaa;
            height: 100%;
            margin-left: 16px;
        }
        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

</style>