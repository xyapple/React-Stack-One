import React from 'react'

class Header extends React.Component {
  render() {
    return (
     <div className="Navigation">
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
       </ul>
     </div>
   );

  }
}
export default Header
