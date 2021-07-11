import Image from "next/image";
import { 
    BeakerIcon,
    ChatIcon,
    ChevronDownIcon,
    BellIcon,
    HomeIcon,
    UserGroupIcon,
    LogoutIcon,
    ViewGridIcon,
    SearchCircleIcon
    } from '@heroicons/react/solid';
import { 
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
    } from '@heroicons/react/outline';
import HeaderIcon from "./HeaderIcon";
import React from "react";
import { session, signOut, useSession } from "next-auth/client";

function Header() {
    const [session] = useSession();
    const msg = () => {
        console.log(session)
    }
    return (
        <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

            {/* header left */}
            <div className="header-left flex items-center">

                <Image 
                    src="https://i.ibb.co/6YSNCm6/937552.png" 
                    width={40} 
                    height={40} 
                    layout="fixed" 
                />
                <div className="input-searchabr flex items-center ml-2 rounded-full p-2 bg-gray-100">
                    <SearchCircleIcon className="h-6 w-6 text-green-500"/> 
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink " type="text" placeholder="Search On Chatter!" />
                </div>
                
            </div>

            {/* header center */}
            <div className="header-center flex justify-center flex-grow">
                <div className="content-of-center flex space-x-6 md:space-x-2">
                    <HeaderIcon isActive={true} Icon = {HomeIcon} />
                    <HeaderIcon isActive={false} Icon = {PlayIcon} />
                    <HeaderIcon isActive={false} Icon = {UserGroupIcon} />
                </div>
            </div>

            {/* header right */}
            <div className="header-right flex items-center sm:space-x-2 justify-end">
                {/* profile pic */}
                <Image 
                    className="rounded-full"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed" 
                />

                {/* profile name */}
                <p className='whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
                {/* <ViewGridIcon className="icon" /> */}
                {/* <ChatIcon className="icon" /> */}
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
                <LogoutIcon onClick={signOut} className="icon" />
            </div>

        </div>
    )
}

export default Header
