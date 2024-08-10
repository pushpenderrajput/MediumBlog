import { Avatar } from "./BlogCard"
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
export const AppBar = ()=>{
    return <div className="flex justify-between border-b px-10 py-4">
        <div className="flex flex-col justify-cente">
            <img className="h-6 pt-2" src={Logo} alt="Logo" />
        </div>
        <div className="flex">
        <Link to={"/publish"} >
        <button type="button" className="mr-8 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300   font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2">
            Publish
        </button>
        </Link>
            <Avatar  name={"Pushpender"}/>
        </div>

    </div>
}