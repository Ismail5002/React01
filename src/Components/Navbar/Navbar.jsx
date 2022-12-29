import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Novbar.module.css'


const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to='/Profile'>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to='/Dialogs'> Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to='/New'>News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to='/Music'>
          Music
        </NavLink>
      </div>
      <div className={classes.item} >
        <NavLink activeClassName={classes.active} to='/FindUsers'>
          Findusers
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink activeClassName={classes.active} to='/Settings'> Settings</NavLink>
        <div className={classes.item}>
          <NavLink activeClassName={classes.active} to='/Friends'>Friends</NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Nav


// `{classes.} {classes.}`