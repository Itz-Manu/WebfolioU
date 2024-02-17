import React from 'react'
import { FaRegStar, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <nav className="p-3">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-lg cursor-pointer">
                       WebFolioU
                    </div>

                    <Link to="https://github.com/Itz-Manu/WebfolioU" target='_blank'>
                        <button className='border-2 cursor-pointer rounded-md p-1 px-3 bg-transparent hover:border-red-500 hover:text-gray-200 hover:shadow-xl font-semibold flex gap-2'>Github<FaGithub size="1.5em" /></button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
