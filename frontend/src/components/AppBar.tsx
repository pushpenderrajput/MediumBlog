import { Avatar } from "./BlogCard"
import Logo from "../assets/Logo.png"
export const AppBar = ()=>{
    return <div className="flex justify-between border-b px-10 py-4">
        <div className="flex flex-col justify-cente">
            <img className="h-6 pt-2" src={Logo} alt="Logo" />
        </div>
        <div>
            <Avatar  name={"Pushpender"}/>
        </div>

    </div>
}