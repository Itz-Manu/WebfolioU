import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TodoBasic from '../projects/ToDo-Basic/todo-basic'
import ToDoText from '../projects/ToDo-Basic/ToDo-Text';
import Welcome from './Welcome';

export default function Home() {

  const [selectedNavItem, setSelectedNavItem] = useState('Welcome');

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };


  return (
    <div>
      <div className='bg-slate-200'>
        <Navbar />
      </div>

      <div className='max-w-[1200px] mx-auto '>
        <div className=''>
          <div className="flex h-[100vh] my-5">
            {/* Left Sidebar */}
            <div className="w-72 bg-gray-800 text-white p-4">
              <h2 className="font-bold text-xl cursor-pointer text-center mb-5">WebFolioU</h2>
              <div className={`cursor-pointer font-semibold py-2 px-4 mb-2 rounded ${selectedNavItem === 'Welcome' ? 'bg-indigo-500' : 'hover:bg-gray-700'}`}
                onClick={() => handleNavItemClick('Welcome')}
              > Welcome</div>
              <h2 className="font-medium text-xl cursor-pointer text-center mb-5">Projects</h2>
              <ul className='font-medium'>
                <li className={`cursor-pointer py-2 px-4 mb-2 rounded ${selectedNavItem === 'TODO-Basic' ? 'bg-indigo-500' : 'hover:bg-gray-700'}`}
                  onClick={() => handleNavItemClick('TODO-Basic')}
                > TODO-Basic</li>

                <li className={`cursor-pointer py-2 px-4 mb-2 rounded ${selectedNavItem === 'Blog-App' ? 'bg-indigo-500' : 'hover:bg-gray-700'}`}
                  onClick={() => handleNavItemClick('Blog-App')}
                > Blog-App</li>

                <li className={`cursor-pointer py-2 px-4 mb-2 rounded ${selectedNavItem === 'Quiz-App' ? 'bg-indigo-500' : 'hover:bg-gray-700'}`}
                  onClick={() => handleNavItemClick('Quiz-App')}
                > Quiz-App</li>

              </ul>
            </div>

            {/* Right Content Area */}
            <div className="bg-gray-200 w-full p-5 overflow-scroll no-scrollbar">

            {selectedNavItem === 'Welcome' && (
                <div className='h-full'>
                  <Welcome/>
                </div>
              )}

              {selectedNavItem === 'TODO-Basic' && (
                <div><ToDoText /></div>
              )}

              {selectedNavItem === 'Blog-App' && (
                <div>
                  <div className="font-bold text-gray-500 text-lg text-center my-auto mt-[25%]">
                    Under Developmant
                  </div>
                </div>
              )}

              {selectedNavItem === 'Quiz-App' && (
                <div>
                  <div className="font-bold text-gray-500 text-lg text-center my-auto mt-[25%]">
                    Under Developmant
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}
