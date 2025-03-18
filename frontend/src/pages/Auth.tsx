import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@pushpenderrajput/medium";
import  axios from "axios";
import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate()
    const [postInputs, setpostInputs] = useState<SignupInput>({
        username: "",
        name: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup" : "signin"}`,postInputs);
            const jwt = response.data.token;
            localStorage.setItem("token",jwt);
            navigate('/blogs');
            console.log(jwt)

        }
        catch(e){
            alert("Invalid Creds")

        }
        

    }
    return <div className=" h-screen flex  justify-center flex-col">
        <div className="flex justify-center">
            <div className="px-10">
                <div className="px-10">
                    <div className="text-3xl font-extrabold justify-center">
                        {type === "signup" ? "Create Account" : "Welcome Back!"}

                    </div>
                    <div className="text-slate-400">{type === "signin" ? "Don't have an account?":"Already have an account?"}<Link to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ?<span className="text-blue-600 font-semibold">Sign in</span>  : <span className="text-blue-600 font-semibold"> Sign up</span> }</Link></div>
                </div>
                <div className="pt-4">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Pushpender Rajput" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            name: (e.target as HTMLInputElement).value,
                        })
                    }} /> : null}
                    <LabelledInput label="Username" type="email" placeholder="yourmail@mail.com" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            username: (e.target as HTMLInputElement).value
                        })
                    }} />
                    <LabelledInput label="Password" type="password" placeholder="Password" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            password: (e.target as HTMLInputElement).value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type === "signup" ? "Sign in" : "Sign up"}
                    </button>
                    {/* {JSON.stringify(postInputs)} */}
                </div>



            </div>
        </div>
    </div>
}
interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent) => void;
    type?: string
};
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {

    return <div >
        <div>
            <label className="block mb-2 text-sm pt-2 text-gray-900 font-semibold ">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5  " placeholder={placeholder} required />

        </div>


    </div>

}
