import React from 'react'
import Input from '../../components/TodoInput'
import List from '../../components/TodoList'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }
    render() {
        return (
            <div>
               <Input submitFn={this.submitFn.bind(this)}/>
               <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }
    submitFn(value) {
        const id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }
    deleteFn(id) {
        let data = this.state.todos
        this.setState({
            todos: data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
}

export default Todo
