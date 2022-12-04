import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src="https://pvlearn.com/wp-content/uploads/2019/08/Resize-Images-for-Print-1.png" alt =""/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet!
            </span>
            <hr />
            <span className="postDate"> 4 hour ago</span>
        </div>
        <p className='postDec'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id tenetur ex aperiam dolores accusamus suscipit consequatur enim provident quia officia minima dolorum et voluptate, sapiente unde consequuntur repudiandae! Aspernatur. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id tenetur ex aperiam dolores accusamus suscipit consequatur enim provident quia officia minima dolorum et voluptate, sapiente unde consequuntur repudiandae! Aspernatur. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id tenetur ex aperiam dolores accusamus suscipit consequatur enim provident quia officia minima dolorum et voluptate, sapiente unde consequuntur repudiandae! Aspernatur. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id tenetur ex aperiam dolores accusamus suscipit consequatur enim provident quia officia minima dolorum et voluptate, sapiente unde consequuntur repudiandae! Aspernatur. 
        </p>
    </div>
  )
}

export default Post
