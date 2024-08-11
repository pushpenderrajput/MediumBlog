import { AppBar } from "../components/AppBar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import  { useNavigate }  from "react-router-dom"
export const Publish = () => {
    const [title , setTitle] = useState("");
    const [description, setDesc] = useState("")
    const navigate = useNavigate();

    return <div>
        <AppBar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">

                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="block outline-none px-2.5 py-4 my-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg " placeholder="Title" required></input>
                <TextArea onChange={(e)=>{setDesc((e.target as HTMLInputElement).value)}}/>
                <button onClick={async ()=>{
                   const res =  await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content:description
                    },{
                        headers:{
                            Authorization:localStorage.getItem('token')
                        }
                    });
                    navigate(`/blog/${res.data.id}`)

                }} type="submit" className="inline-flex items-center px-5 py-2.5 pt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
           Publish post
       </button>
            </div>
           
        </div>
    
    </div>
}


function TextArea({onChange}:{onChange:(e:ChangeEvent)=>void}){
    return <form>
        
       <div className="w-full mb-4 rounded-lg bg-gray-50">
           <div className="px-4 py-2 bg-white rounded-b-lg border">
              
               <textarea onChange={onChange} rows={8} className="block outline-none w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0  " placeholder="Write an article..." required ></textarea>
           </div>
       </div>
       
    </form>
    
}