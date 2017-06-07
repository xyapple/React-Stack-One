import React from 'react'
import { render } from 'react-dom'

// 通用样式
import './static/css/common.less'
// import Hello from './containers/Hello/';
// testing
import Perf from 'react-addons-perf'
import Todo from './containers/Todo/';
render(
    <Todo/>,
    document.getElementById('root')
)
