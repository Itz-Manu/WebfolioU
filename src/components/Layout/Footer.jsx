import React from 'react'
import { FaUserCircle } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white p-4 px-5">
                <div className="container mx-auto flex justify-between items-center">
                    <div className='font-semibold min-[600px]:text-base min-[320px]:text-sm'>
                        &copy; 2024 WebFolioU. All rights reserved.
                    </div>

                    <div className='flex my-auto gap-5 items-center'>
                        <span className="font-semibold">@Itz_Manuv</span>
                        <span> | </span>
                        <div className="bg-white text-gray-800 p-1 rounded-full cursor-pointer">
                            <FaUserCircle size="1.5em" />
                        </div>
                    </div>


                </div>
            </footer>
        </div>
    )
}
