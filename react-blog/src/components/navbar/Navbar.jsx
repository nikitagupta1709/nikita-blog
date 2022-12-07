import "./navbar.css";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';
import {HiSearch} from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import {Context} from "../../context/context"
import { useContext } from "react";


export const Navbar = () => {
  const {user, dispatch} = useContext(Context); 

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare color="lightsteelblue" fontSize="25px" cursor="pointer"/>
        <FaTwitterSquare color="lightsteelblue" fontSize="25px" cursor="pointer"/>
        <FaPinterestSquare color="lightsteelblue" fontSize="25px" cursor="pointer"/>
        <FaInstagramSquare  color="lightsteelblue" fontSize="25px" cursor="pointer"/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink className="link" to="/" >HOME</NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link">ABOUT</NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link">CONTACT</NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link" to="/write">WRITE</NavLink>
          </li>
          <li className="topListItem">
            <NavLink onClick={handleLogout} className="link">{user  && "LOGOUT"}</NavLink>
          </li>
        </ul>

      </div>
      <div className="topRight">
        {
          user ? (
            <NavLink to="/settings">
              <img className="topImg" src={user.profilePic} alt=""/>
            </NavLink>
          ): (
            <ul className="topList">
              <li className="topListItem">
                <NavLink className="link" to="/login">LOGIN</NavLink>
              </li>
              <li className="topListItem">
                <NavLink className="link" to="/register" >REGISTER</NavLink>
              </li>
            </ul>
          )
        }
        <HiSearch  />
      </div>
    </div>
  )
}
