# lunzi --- VUE UI组件

## 介绍
## 开始使用

1. CSS样式

    1. 请在使用前将css的box-sizing 设置为border-box
        ```
        *{box-sizing: border-box;}
        *::before{box-sizing: border-box;}
        *::after{box-sizing: border-box;}
        ```
        IE8及以上浏览器均支持此样式
    2. 设置默认颜色等变量（后续会改为SCSS变量）
        ```
        :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
        ```
        IE15及以上浏览器均支持此样式
2. 安装lunzi
    ```
        npm install -s lunzi
    ```
3. 引入lunzi
    ```
    import {Button, ButtonGroup, Icon} from 'lunzi'
    import 'lunzi/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-icon': Icon
      }
    }

    ```
## 文档

## 提问

## 变更记录

## 联系方式
