import Image from "next/image";
function SidebarRow({Icon, Title}) {
    return (
        <div className="flex p-3 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            {/* {
                src && (
                    <Image 
                        src={src} 
                        width={30}
                        height={30}
                        layout="fixed"
                    />
                )
            } */}
            {
                Icon && (
                    <Icon className="h-6 w-6 text-green-500" />
                )
            }
            <p className="hidden sm:inline-flex font-medium ml-4"> {Title} </p>
        </div>
    )
}

export default SidebarRow
