import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className="header">
            <div className="logo">
               <h3>Task Manager</h3>
            </div>
            <div>
               <nav>
                   <ul>
                       <li>
                       <Link to="/">Task One</Link>
                       </li>
                       <li>
                       <Link to="/task2">Task Two</Link>
                       </li>
                   </ul>
               </nav>
            </div>
        </div>
     );
}
 
export default Header;