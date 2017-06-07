import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Todo from '../containers/Todo'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
  updateHandle() {
    console.log('everytime we change the router, it will be trigered')
  }
  render(){
    return(
      <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
        <Router path='/' component={App}>
          <IndexRoute component={Home}/>
          <Router path='list' component={Todo}/>
          <Route path="*" component={NotFound}/>
        </Router>
    )
  }
}

export default RouteMap
