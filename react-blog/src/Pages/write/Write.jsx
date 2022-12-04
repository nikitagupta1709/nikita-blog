import './write.css'
import { MdAddAPhoto } from 'react-icons/md'
export const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src="https://cdn.pixabay.com/photo/2018/03/01/14/48/woman-3190829_960_720.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <MdAddAPhoto className='writeIcon'/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your Story' className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">PUBLISH</button>
        </form>
    </div>
  )
}
