import { useSession } from "next-auth/client"
import { 
    ChevronDownIcon,
    UserGroupIcon,
    ArrowUpIcon
    } from '@heroicons/react/solid';
import { 
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon
    } from '@heroicons/react/outline';
import SidebarRow from "./SidebarRow";
import { useState } from "react";
function Sidebar() {
    const [session, loading] = useSession();
    const [showMoreOrLess, setShowMoreOrLess] = useState(true);
    function toggleShowMoreOrLess() {
        setShowMoreOrLess(!showMoreOrLess)
    }
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">

            <SidebarRow src = {session.user.image} Title = {session.user.name} />
            <SidebarRow Icon = {UserIcon} Title = "Friends" />
            <SidebarRow Icon = {UserGroupIcon} Title = "Groups" />

            {
                showMoreOrLess === true && 
                <div onClick={toggleShowMoreOrLess}>
                    <SidebarRow Icon = {ChevronDownIcon} Title = "See More"/>
                </div>
                
            }

            {
                showMoreOrLess === false && 
                    <>
                        <SidebarRow Icon = {DesktopComputerIcon} Title = "Watch" />
                        <SidebarRow Icon = {CalendarIcon} Title = "Events" />
                        <SidebarRow Icon = {ClockIcon} Title = "Memories" /> 
                        <div onClick={toggleShowMoreOrLess}>
                            <SidebarRow Icon = {ArrowUpIcon} Title = "See Less" />  
                        </div> 
                    </>
            }

        </div>
    )
}

export default Sidebar
