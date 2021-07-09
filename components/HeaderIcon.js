function HeaderIcon({Icon, isActive}) {
    return (
        <div className={`cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl text-gray-500 hover:text-green-500 ${isActive && " text-yellow-500 border-b-2 border-yellow-500 hover:text-yellow-500 "}`}>
            <Icon className="h-5 sm:h-7 text-center mx-auto" />
        </div>
    )
}

export default HeaderIcon
