import React from 'react'
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <nav className="p-3 text-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-lg">
                       WebFolioU
                    </div>

                    <div className="bg-white text-gray-800 p-1 rounded-full">
                        <FaUserCircle size="1.5em"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
