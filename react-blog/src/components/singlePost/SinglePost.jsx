import './singlePost.css'
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../context/context';

export const SinglePost = () => {
    const { postId } = useParams();
    // console.log(postId);
    const [ post, setPost ] = useState({});
    const [navigate, setNavigate] = useState(false);
    const {user} = useContext(Context);

    const PF = "http://localhost:3050/images/";
    useEffect ( () => {
        getPost();
    },[])

    const getPost = () =>{
        axios.get(`http://localhost:3050/posts/${postId}`)
        .then((res) =>  setPost(res.data))
        .catch((error) => console.log(error))
    }
    const handleClick = () =>{
        axios.delete(`http://localhost:3050/posts/${postId}`,{data: {username:user.username}})
        .then((res) => {
            alert(res.data.message)
            setNavigate(true)
        })
        .catch((error) => console.log(error))
    }

    if(navigate){
        return <Navigate to="/"/>
    }

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {
                post.photo && (
                    <img className='singlePostImg' src={PF + post.photo} alt=""/>
                )
            }
            <h1 className="singlePostTitle">
                {post.title}
                {post.username === user?.username && (
                    <div className="singlePostEdit">
                        <BiEdit className="singlePostIcon" />
                        <RiDeleteBinLine className="singlePostIcon" onClick={handleClick}/>
                    </div>
                )}
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: 
                    <NavLink to={`/?user=${post.username}`} className="link" > <b>{post.username}</b></NavLink>
                    </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>
                {post.desc}
            </p>
        </div>
    </div>
  )
}
