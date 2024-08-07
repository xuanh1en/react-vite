// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header=()=>{
    return(
        <ul> 
            <li><NavLink className="active" to="/">Home</NavLink></li> 
            <li><NavLink to="/users">Users</NavLink></li> 
            <li><NavLink to="/books">Books</NavLink></li> 
        </ul>
    )
};

export default Header