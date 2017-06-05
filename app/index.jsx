import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'


class Hello extends React.Component {
  render() {
    const arr = ['apple', 'banana', 'coconut']
    return (
      <div>
       <p>Hello React!!</p>
      <div>
        <p onClick={this.clickHandler.bind(this)} style={{fontSize:'28px', display:'block'}}>Fruit Table</p>
        {arr.map((item, index) => {
        return <p key={index}>this is {item}</p>
      })
      }
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
