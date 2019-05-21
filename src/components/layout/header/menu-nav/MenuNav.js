import React,{Component} from 'react';
import {Link} from 'react-router-dom'
const MenuNav = (props) => {
    let menuItemAnimation = props.toggle === true ? {opacity: "1", display: 'flex'} : {};
    let menuAnimation = props.toggle ===true ? {height : "200px"} : {};
    return(
      <div className="c-navBar__bottom-bar">
        <div className="c-navBar__bottom-bar__menu " style={menuAnimation}>
              <Link className="c-navBar__bottom-bar__menu__item" style={menuItemAnimation} to="/search/ " >Shop</Link>
              <Link className="c-navBar__bottom-bar__menu__item" style={menuItemAnimation} to="/aboutus"> About Us</Link>
              <Link className="c-navBar__bottom-bar__menu__item" style={menuItemAnimation} to="/news"> News</Link>
              <Link className="c-navBar__bottom-bar__menu__item" style={menuItemAnimation} to="/contacts"> Contacts</Link>
              <Link className="c-navBar__bottom-bar__menu__item" style={menuItemAnimation} to="/FAQ"> FAQ</Link>
        </div>
  </div>
    )
}

export default MenuNav;
