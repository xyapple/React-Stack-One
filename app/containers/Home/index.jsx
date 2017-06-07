import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <Link to="/todo">to Todo List</Link>
            </div>
        )
    }
}

export default Home
