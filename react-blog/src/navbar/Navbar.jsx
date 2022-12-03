import "./navbar.css";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';
import {HiSearch} from 'react-icons/hi';
export const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare color="#1977f3"/>
        <FaTwitterSquare color="#1da1f2" />
        <FaPinterestSquare color="#b7081b" />
        <FaInstagramSquare  color="#c4337e" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>

      </div>
      <div className="topRight">
        <img className="topImg" src="https://avatars.githubusercontent.com/u/69791429?v=4" alt=""/>
        <HiSearch  />
      </div>
    </div>
  )
}
