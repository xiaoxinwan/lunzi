module.exports = {
    base:'/lunzi/',
    title: 'LZ UI',
    description: '简洁至上',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
        ],

        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: ['/install/','/get-started/']
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    './components/button',
                    './components/input',
                    './components/grid',
                    './components/layout',
                    './components/toast',
                    './components/tabs',
                    './components/popover',
                    './components/collapse',
                ]
            }
        ]
    }
}