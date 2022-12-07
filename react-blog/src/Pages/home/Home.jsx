import { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import axios from 'axios'
import './home.css'

export const Home = () => {
  const [post, setPost ] = useState([]);

  useEffect(()=>{

    axios.get()

  }, [])
  return (
    <div>
        <Header />
        <div className='home'>
            <Posts />
            <Sidebar />
        </div>
    </div>
  )
}
