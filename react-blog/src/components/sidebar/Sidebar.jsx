import './sidebar.css'
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    const [ category, setCategory ] = useState([]);

    useEffect( () => {
        getCategories();
    }, [])

    const getCategories = () => {
        axios.get(`https://viniya-blog.onrender.com/categories`)
        .then((res) => setCategory(res.data.data));
    }
    // console.log(category)
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME </span>
            <img className='sidebarImg' src="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg" alt="" /> 
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quo animi minima impedit, molestiae nisi quisquam est repellendus? Possimus modi quam facere corrupti soluta ab quisquam, at aliquam commodi minima.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES </span>
            <ul className="sidebarList">
                {category.map((cat) => (
                    <NavLink key={cat._id} to={`/?cat=${cat.name}`} className="link">
                        <li  className="sidebarListItem">{cat.name}</li>
                    </NavLink>
                ))}
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
