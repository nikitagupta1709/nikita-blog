import "./navbar.css";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';
import {HiSearch} from 'react-icons/hi';
export const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaPinterestSquare />
        <FaInstagramSquare />
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
        <img src="https://avatars.githubusercontent.com/u/69791429?v=4" alt=""/>
        <HiSearch />
      </div>
    </div>
  )
}
