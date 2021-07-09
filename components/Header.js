import Image from "next/image";

function Header() {
    return (
        <div>

            {/* header left */}
            <div className="header-left">

                <Image 
                    src="https://i.ibb.co/6YSNCm6/937552.png" 
                    width={40} 
                    height={40} 
                    layout="fixed" 
                />
                
            </div>
            {/* header center */}

            {/* header right */}

        </div>
    )
}

export default Header
