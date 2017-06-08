import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import Todo from '../containers/Todo'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('everytime we click, it triged')
    }

    render() {

        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route exact={true} path='/' component={Home}>
                    <Route path='todo' component={Todo}/>
                    <Route path='list' component={List}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
