import { Header } from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const [posts, setPosts ] = useState([]);
  const { search } = useLocation();


  useEffect(()=>{
    getPosts();
  },[search])

  const getPosts = async()=>{
    axios.get("http://localhost:3050/posts"+search)
    .then((res) => setPosts (res.data.data) )
  }
  return (
    <div>
        <Header />
        <div className='home'>
            <Posts posts={posts}/>
            <Sidebar />
        </div>
    </div>
  )
}
