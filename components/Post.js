import { session, useSession } from "next-auth/client";
import Image from "next/image";
import { 
    VideoCameraIcon,
    CameraIcon
    } from '@heroicons/react/solid';
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function Post() {
    const [session] = useSession();
    const msgText = useRef(null); 
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }
    const removeImageFromPost = () => {
        setImageToPost(null)
    }
    const submitPost = (e) => {
        e.preventDefault();
        if(!msgText.current.value) return;
        db.collection('posts').add({
            message: msgText.current.value,
            name   : session.user.name,
            email  : session.user.email,
            photo  : session.user.image,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage
                .ref(`posts/${doc.id}`)
                .putString(imageToPost, "data_url");

                removeImageFromPost();

                uploadTask.on(
                    "state_change",
                    null,
                    (error) => console.error(error),
                    () => {
                        storage
                            .ref('posts')
                            .child(doc.id)
                            .getDownloadURL()
                            .then(url => {
                                db.collection('posts').doc(doc.id).set(
                                    {
                                        postImage: url,
                                    },
                                    {merge: true}
                                );
                            })
                    }
                );
            }
        })
        alert('Posted!')
        filePickerRef.current.value =''
        // document.getElementById('input-form').value = '';
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
                    {
                        imageToPost && (
                            <div className="flex flex-col ml-3 filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer" onClick={removeImageFromPost}>
                                <img className="h-10 object-contain rounded-xl" src={imageToPost} alt="" />
                                <p className="text-xs text-red-500 text-center">Remove</p>
                            </div>
                        )
                    }
                    <button type="submit" className='ml-3 bg-blue-400 pl-2 pr-2 rounded-2xl text-white' onClick={submitPost}>Submit</button>
                </form>
            </div>
            <div className="icons flex p-3 justify-evenly border-t">
                <div className="inputIcons ">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div className="inputIcons " onClick={() => filePickerRef.current.click()}>
                    <CameraIcon className="h-7 text-blue-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Add Photos / Videos</p>
                    <input type="file" ref={filePickerRef} hidden onChange={addImageToPost}/>
                </div>
            </div>
        </div>
    )
}

export default Post
