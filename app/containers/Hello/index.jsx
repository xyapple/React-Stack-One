import React from 'react'

import Header from '../../components/Header'
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'

class Hello extends React.Component {
  //ES6 provide the constructor function; otherwise will use the getInitalState
    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now()
        }
    }
    render() {
      var obj = {a:100, b:true}
        return (
            <div>
                <Header title="helloPage"/>
                <p onClick={this.clickHandler.bind(this)}>hello world {this.state.now}</p>
                <hr/>
                <Carousel/>
                <Recommend/>
                <List/>
                <hr/>
            </div>
        )
    }
    clickHandler() {
        this.setState({
            now: Date.now()
        })
    }
    //Component life circle
    componentDidMount(){
      //ajx calls


    }
    //Component life circle
    componentDidUpdate(prevProps, prevState){
      //ajx calls
      //router
      console.log("Hi~~")
    }
    componentWillUnmount(){
      //clean setTimeout setInterval
      //router
    }
}

export default Hello
