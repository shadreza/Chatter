import Image from "next/image";
function SidebarRow({Icon, Title, src}) {
    return (
        <div className="flex items-center space-x-2 p-4 rounded-xl hover:bg-gray-200 cursor-pointer">
            
            {
                src && (
                    <Image 
                        src={src} 
                        width={30}
                        height={30}
                        layout="fixed"
                        className="rounded-full"
                    />
                )
            }
            {
                Icon && (
                    Title === 'See More' ?
                        <Icon className="h-6 w-6 text-green-500 animate-bounce" />
                        :
                        Title === 'See Less' ?
                            <Icon className="h-6 w-6 text-green-500 animate-bounce" />
                            :
                            <Icon className="h-6 w-6 text-green-500" />
                )
            }
            {
                Title && (
                    <p className="hidden sm:inline-flex font-medium ml-4"> {Title} </p>
                )
            }

        </div>
    )
}

export default SidebarRow
