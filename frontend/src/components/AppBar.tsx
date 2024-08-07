import { Avatar } from "./BlogCard"
import Logo from "../assets/Logo.png"
export const AppBar = ()=>{
    return <div className="flex justify-between border-b px-10 py-4">
        <div className="flex flex-col justify-cente">
            <img className="h-8" src={Logo} alt="Logo" />
        </div>
        <div className="">
            <Avatar  name={"Pushpender"}/>
        </div>

    </div>
}