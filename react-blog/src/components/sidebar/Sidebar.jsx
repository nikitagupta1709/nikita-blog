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
            <span className="sidebarTitle">BLOG HISTORY</span>
            <img className='sidebarImg' src="https://media.istockphoto.com/id/1331943301/photo/blog-light-bulb-sign.jpg?s=170667a&w=0&k=20&c=EIKOZ_tAGxc48Y8OvJkWtgVEUWEtrMt-7Mb9vL_cowY=" alt="" /> 
            <p>
                When blogging started, the first blogs were really glorified online journals, 
                and in all likelihood, becoming a professional blogger and making money online wasn't the goal. 
                Since then, the blogosphere has evolved, and now people blog for many different reasons. 
                There are even distinctions among types of blogs - business, lifestyle, fashion, food, and entertainment blogs, among others.
            </p>
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
