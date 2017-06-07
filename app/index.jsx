import React from 'react'
import { render } from 'react-dom'
import {hashHistory} from 'react-router'

import RouteMap from './router/routeMap'

// Less inside the css
import './static/css/common.less'
// import Hello from './containers/Hello/';
// import Todo from './containers/Todo/';

// testing
import Perf from 'react-addons-perf'


render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)
