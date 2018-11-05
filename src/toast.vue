<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot></slot>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
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
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('beforeClose')
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
    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%)}
        100% {opacity: 1; transform: translateY(0%)}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%)}
        100% {opacity: 1; transform: translateY(0%)}
    }
    @keyframes fade-in {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .wrapper{
        position: fixed; left: 50%;transform: translateX(-50%);

        &.position-top {
            top: 0;
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down 1s
            }
        }
        &.position-bottom {
            bottom: 0;
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up 1s;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast{
                animation: fade-in 1s;
            }
        }
    }
    .toast {
        font-size: 14px;
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
    }

</style>