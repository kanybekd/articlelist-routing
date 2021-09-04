import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom"
const Example = () => {
  return (
    <div>
      <Nav>
        <NavItem>
            <Link to="/">
                <NavLink >Home</NavLink>
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/about">
                    <NavLink >About</NavLink>
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/articlelist">
                <NavLink>ArticleList</NavLink>
            </Link>
        </NavItem>
        </Nav>
 
    </div>
  );
}

export default Example;