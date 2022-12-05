import './sidebar.css'
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME </span>
            <img className='sidebarImg' src="https://avatars.githubusercontent.com/u/69791429?v=4" alt="" /> 
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quo animi minima impedit, molestiae nisi quisquam est repellendus? Possimus modi quam facere corrupti soluta ab quisquam, at aliquam commodi minima.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Movies</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <FaFacebookSquare color="lightsteelblue" fontSize="25px" cursor="pointer"/>
                <FaTwitterSquare color="lightsteelblue" fontSize="25px" cursor="pointer"/>
                <FaPinterestSquare color="lightsteelblue" fontSize="25px" cursor="pointer" />
                <FaInstagramSquare  color="lightsteelblue" fontSize="25px" cursor="pointer"/>
            </div>
        </div>
    </div>
  )
}
