import React, { useState } from 'react'
import TodoBasic from './todo-basic';
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ToDoText() {

    const [showOutput, setShowOutput] = useState(false)

    const handleOutputButton = () => {
        setShowOutput(!showOutput? true : false);
    };
    return (
        <div>
            {
                showOutput ?
                    <div>
                        <button onClick={handleOutputButton} className='bg-indigo-400 text-white rounded-full p-2 absolute'><IoIosArrowRoundBack size="2em"/></button>
                        <TodoBasic />
                    </div>
                    : <div>
                        <div className="container mx-auto p-4">
                            <h1 className="text-3xl font-bold mb-4">Basic To-Do List App</h1>
                            <hr className='border-black mb-3'/>
                            <p className="mb-4 text-gray-600">This is a basic To-Do List App in which you can add tasks you want to do.</p>

                            <h2 className="text-2xl font-bold mb-2">Purpose</h2>
                            <hr className='border-black mb-3'/>
                            <p className="mb-4 text-gray-600">
                                The purpose of creating this To-Do List App is to explore and learn the process of efficiently storing and retrieving data from local storage within a React application.
                            </p>

                            <h2 className="text-2xl font-bold mb-2">Learning</h2>
                            <hr className='border-black mb-3'/>
                            <p className="mb-2 text-gray-600">Local Storage provides us five methods:</p>
                            <ul className="list-disc pl-6 mb-3 text-gray-500">
                                <li>`setItem()`: This method is used to add a key and a value to localStorage.</li>
                                <li>`getItem()`: This method is used to get an item from localStorage using the key.</li>
                                <li>`removeItem()`: This technique is used to delete an item from localStorage based on its key.</li>
                                <li>`clear()`: This technique is used to delete all instances of localStorage.</li>
                                <li>`key()`: When you supply a number, it aids in the retrieval of a localStorage key.</li>
                            </ul>

                            <h2 className="text-2xl font-bold mb-2">Screenshots</h2>
                            <hr className='border-black mb-3'/>
                            <div className="mb-4 flex gap-3 w-[30vw] rounded-md">
                                <img src="/ToDo-img/image.png" alt="Screenshot 1" />
                                <img src="/ToDo-img/image-1.png" alt="Screenshot 2" />
                            </div>

                            <h2 className="text-2xl font-bold mb-2">View Output</h2>
                            <hr className='border-black mb-3'/>
                            <p className="mb-2 text-gray-600">See Output Of the project</p>
                            <div className='flex items-center justify-center font-semibold text-lg'>
                                <button onClick={handleOutputButton} className="bg-indigo-500 text-white  px-5 py-2 rounded-md cursor-pointer hover:bg-indigo-600">
                                    Output
                                </button>
                            </div>
                           
                        </div> 
                    </div>
            }

                   
        </div>
    )
}
