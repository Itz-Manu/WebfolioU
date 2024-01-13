import React from 'react'
import { FaRegStar, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white p-4 px-5">
                <div className="container mx-auto flex justify-between items-center">
                    <div className='font-semibold min-[600px]:text-base min-[320px]:text-sm'>
                        &copy; 2024 WebFolioU. All rights reserved.
                    </div>
                    <div>
                        <button className='border-white border-2 cursor-pointer rounded-md p-1 bg-transparent hover:text-yellow-200 hover:border-yellow-200 font-semibold flex gap-2'>Github<FaGithub size="1.5em" /></button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
