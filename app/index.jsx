import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'


class Hello extends React.Component {
  render() {
    const arr = ['a', 'b', 'c']
    return (
      <div>    
       <p>Hello world! React!!</p>
      <div>
        {arr.map((item, index) => {
        return <p key={index}>this is {item}</p>
      })
      }
    </div>
    </div>
    ) }
  }


render(
  <Hello/>,
  document.getElementById('root')
)
