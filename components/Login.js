import Image from "next/image";
import {signIn} from "next-auth/client"

function Login() {
    return (
        <div className="grid place-items-center">
            <div className="images mt-20">
                <Image 
                    src="https://i.ibb.co/6YSNCm6/937552.png" 
                    width={80} 
                    height={80} 
                    objectFit="contain"
                />
                <Image 
                    src="https://i.ibb.co/mDWTk1X/179319.png" 
                    width={80} 
                    height={80} 
                    objectFit="contain"
                />  
            </div>
            <h1 onClick={signIn} className="p-5 bg-blue-400 mt-10 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
