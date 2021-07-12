import { session, useSession } from "next-auth/client";
import Image from "next/image";
import { 
    VideoCameraIcon,
    CameraIcon
    } from '@heroicons/react/solid';
import { useRef } from "react";
import { db } from "../firebase";
import firebase from "firebase";

function Post() {
    const [session] = useSession();
    const msgText = useRef(null);
    const submitPost = (e) => {
        e.preventDefault();
        if(!msgText.current.value) return;
        db.collection('posts').add({
            message: msgText.current.value,
            name   : session.user.name,
            email  : session.user.email,
            photo  : session.user.image,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        alert('Posted!')
        document.getElementById('input-form').value = '';
    }
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src = {session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input 
                        id="input-form"
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        type="text" 
                        placeholder={`What's on your mind, ${session.user.name}`}
                        ref = {msgText}
                    />
                    <button type="submit" className='ml-3 bg-blue-400 pl-2 pr-2 rounded-2xl text-white' onClick={submitPost}>Submit</button>
                </form>
            </div>
            <div className="icons flex p-3 justify-evenly border-t">
                <div className="inputIcons ">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div className="inputIcons ">
                    <CameraIcon className="h-7 text-blue-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Add Photos / Videos</p>
                </div>
            </div>
        </div>
    )
}

export default Post
