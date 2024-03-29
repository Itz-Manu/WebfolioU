import React, { useEffect, useRef, useState } from 'react'
import Tasks from './Tasks'

export default function TodoBasic() {


    const inputRef = useRef();

    const [tasks, setTasks] = useState(Object.keys(localStorage));

    const handleAddClick = () => {
        const inputText = inputRef.current.value;

        const taskKey = 'key' + Date.now();                 // generate unique value

        localStorage.setItem(taskKey, JSON.stringify(inputText));
        inputRef.current.value = '';                        // Empty the input field

        setTasks((prevTasks) => [...prevTasks, taskKey]);

    };

    const handleDeleteAllClick = () => {
        // Clear the tasks in both state and local storage
        setTasks([]);
        localStorage.clear();
    };

    const handleDeleteClick = (key) => {
        localStorage.removeItem(key)
        setTasks((prevTasks) => prevTasks.filter((taskKey) => taskKey !== key));
    }


    return (
        <div className='p-5 mx-auto'>
            <div className='bg-slate-900 text-white p-5 text-center'>
                <div className='foruser mb-7'>
                    <h2 className='text-4xl font-bold'>TO-DO LIST</h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 mt-10 gap-3 ">
                        <input
                            className="bg-slate-800 w-full sm:w-[30vw] p-2 px-3 rounded-md outline-none"
                            type="text"
                            ref={inputRef}
                            placeholder="Enter Task..."
                        />
                        <button onClick={handleAddClick} className="bg-indigo-500 text-white px-5 py-2 font-semibold rounded-md hover:bg-indigo-400 mt-3 sm:mt-0">
                            ADD
                        </button>
                    </div>
                </div>

                <div className='tasks bg-gray-700 h-[25rem] px-5 py-3 rounded-md overflow-scroll no-scrollbar mx-auto sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50vw] 2xl:w-[50vw] mt-5'>
                    {tasks.length === 0 ? (
                        <div className="font-bold text-gray-200 text-lg mt-[25%]">
                            You Don't Have Any Task To DO!
                        </div>
                    ) : (
                        <div>
                            {
                                tasks.map((key) => (
                                    <Tasks key={key} taskId={key} onDeleteClick={handleDeleteClick} />
                                ))
                            }
                        </div>
                    )}
                </div>

                <div className=''>
                    <button onClick={handleDeleteAllClick} className="bg-red-500 text-white m-5 p-2 px-5 text-lg font-semibold rounded-md cursor-pointer hover:bg-red-600">
                        Delete All
                    </button>
                </div>
            </div>
        </div>


    )
}
