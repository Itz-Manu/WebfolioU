import React, { useRef, useState } from 'react'

export default function Tasks({ taskId, onDeleteClick }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const inputRef = useRef();

    const handleEditClick = () => {
        setEditingTaskId(taskId);
        setIsEditing(isEditing ? false : true);

    };

    const handleSaveClick = () => {
        setIsEditing(false);
        const editedText = inputRef.current.value;
        inputRef.current.value = ''; 
        localStorage.setItem(editingTaskId, JSON.stringify(editedText));
    };

    const handleDeleteClick = () => {
        onDeleteClick(taskId);
    };

    const [checked, setChecked] = useState(false);
    const handlecheckbox = () => {
        setChecked(!checked ? true : false);
    }


    return (
        <div>
            <div className={`p-3 flex rounded-lg items-center justify-between my-3 ${checked ? "bg-green-400" : "bg-slate-400"} `}>
                <div className="flex items-center space-x-2">
                    <input onChange={handlecheckbox} type="checkbox" className="border-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        ref={inputRef}
                        className={`w-[33vw] p-2 rounded-md bg-white ${checked ? "line-through bg-green-300" : ""}  `}
                        placeholder={localStorage.getItem(taskId)}
                        disabled={!isEditing}
                    />
                </div>
                <div className="flex space-x-2">
                    {!isEditing ? (
                        <div onClick={() => handleEditClick(taskId)} className="bg-blue-500 text-white px-3 py-1 font-medium rounded-md cursor-pointer hover:bg-blue-600">
                            Edit
                        </div>
                        ) : (
                        <button onClick={handleSaveClick}
                            className='bg-blue-500 text-white px-3 py-1 font-medium rounded-md cursor-pointer hover:bg-blue-600'>
                            Save
                        </button>
                    )}
                    <div onClick={handleDeleteClick} className="bg-red-500 text-white px-3 py-1 font-medium rounded-md cursor-pointer hover:bg-red-600">
                        Delete
                    </div>
                </div>
            </div>

        </div>
    )
}
