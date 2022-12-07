import './settings.css'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { CgProfile } from 'react-icons/cg'
import { useContext } from 'react'
import { Context } from '../../context/context'

export const Settings = () => {
  const {user} = useContext(Context)

  return (
    <div className='settings'>
      <div className="settingsWrapper"> 
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account </span>
            <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src={user.profilePic} alt=""/>
                <label htmlFor="fileInput">
                    <CgProfile className='settingsPPIcon'/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Username"/>
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className='settingsSubmit'>Update</button>
        </form>
      </div>
        <Sidebar />
    </div>
  )
}

