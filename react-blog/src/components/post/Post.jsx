import './post.css'
import { NavLink } from 'react-router-dom'

const Post = ({post}) => {
    const PF = "https://viniya-blog.onrender.com/images/";

  return (
    <div className='post'>
        {post.photo && ( 
            <img className='postImg' src={PF + post.photo} alt =""/>
        )}
        <div className="postInfo">
            <div className="postCats">

                {post.categories.map((c) => (
                    <span key={c} className="postCat">{c}</span>
                ))}

            </div>
            <NavLink to={`/post/${post._id}`} className="link">
                <span className="postTitle"> {post.title} </span>
            </NavLink>
            <hr />
            <span className="postDate"> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDec'>{post.desc}</p>
    </div>
  )
}

export default Post
