import React from 'react'
import { Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>
              <Link to="/list">to list</Link>
              <hr/>
              <Link to="/todo">Todo List</Link>
            </div>
        )
    }
}

export default Home
