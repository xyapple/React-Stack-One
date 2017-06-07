import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'


class Hello extends React.Component {
  render() {
    const arr = ['apple', 'banana', 'coconut']
    return (
      <div>
       <p>Hello React!!123456</p>
       <br/>
      <div>
        <p onClick={this.clickHandler.bind(this)} style={{fontSize:'28px', display:'block'}}>Fruit Table</p>
        <ul>
          {arr.map((item, index) => {
              return <li key={index}>this is {item}</li>
          })}
        </ul>
    </div>
    </div>
    )
  }
    clickHandler(e){
      e.preventDefault()
      console.log(Date.now())
    }
  }


render(
  <Hello/>,
  document.getElementById('root')
)
