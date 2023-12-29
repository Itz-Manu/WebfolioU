import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Welcome() {
    return (
        <div className=' flex h-full'>
            <div className='rounded-md bg-slate-50 my-auto'>
                <div className='hero flex justify-center items-center'>
                    <div className='left p-5'>
                        <div className='text mb-5'>
                            <h2 className='text-4xl font-bold mb-2'>Welcome To</h2>
                            <h1 className='text-5xl font-bold mb-4'>WebFolioU</h1>
                            <h4 className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit!</h4>
                        </div>
                        <div className='project'>
                            <div className='flex gap-5 mb-5'>
                                <div className="flex w-[16vw] justify-between bg-gray-200 hover:bg-gray-100 p-3 rounded-md shadow-md">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-700">Blog App</h3>
                                        <h5 className="text-xs text-gray-600">With Collaboration</h5>
                                    </div>
                                    <div className='my-auto text-gray-500'>
                                        <IoIosArrowRoundForward size="2em" />
                                    </div>
                                </div>
                                <div className="flex w-[16vw] justify-between bg-gray-200 hover:bg-gray-100  p-3 rounded-md shadow-md">
                                    <div>
                                        <h3 className="text-lg font-bold text-indigo-700">Quiz App</h3>
                                        <h5 className="text-xs text-gray-600">With Collaboration</h5>
                                    </div>
                                    <div className='my-auto text-gray-500'>
                                        <IoIosArrowRoundForward size="2em" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="flex w-[16vw] justify-between bg-gray-200 hover:bg-gray-100 p-3 rounded-md shadow-md">
                                    <div className="text-lg font-semibold">
                                        <h3>Other</h3>
                                    </div>
                                    <div className='my-auto text-gray-500'>
                                        <IoIosArrowRoundForward size="2em" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='img'>
                        <img src="hero.jpg" alt="profile" className='rounded-r-md shadow-lg' style={{ width: '400px' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}
