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
    const [ post, setPost ] = useState({});
    const [navigate, setNavigate] = useState(false);
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    const PF = "http://localhost:3050/images/";
    useEffect ( () => {
        getPost();
    },[])

    const getPost = () =>{
        axios.get(`http://localhost:3050/posts/${postId}`)
        .then((res) => {
             setPost(res.data)
             setTitle(res.data.title)
             setDesc(res.data.desc)
            })
        .catch((error) => console.log(error))
        
    }
    const handleDelete = () =>{
        axios.delete(`http://localhost:3050/posts/${postId}`,{data: {username:user.username}})
        .then((res) => {
            alert(res.data.message)
            setNavigate(true)
        })
        .catch((error) => console.log(error))
    }

    const handleUpdate = () =>{
        axios.put(`http://localhost:3050/posts/${postId}`,{username:user.username, title, desc})
        .then((res) => {
            alert("Your blog has been updated")
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
            {
                updateMode ? (<input type="text" value={title} className="singlePostTitleInput" onChange={(e)=>setTitle(e.target.value)} autoFocus /> ): (
                    <h1 className="singlePostTitle">
                        {post.title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <BiEdit className="singlePostIcon" onClick={ () => setUpdateMode(true)} />
                                <RiDeleteBinLine className="singlePostIcon" onClick={handleDelete}/>
                            </div>
                        )}
                    </h1>
                )}
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: 
                    <NavLink to={`/?user=${post.username}`} className="link" > <b>{post.username}</b></NavLink>
                    </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}  />) :(
                <p className='singlePostDesc'>
                {post.desc}
            </p>
            )}
            <button className='singlePostButton' onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}
