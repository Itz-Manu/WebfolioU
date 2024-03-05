import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BasicProject } from './ProjectDetails';

export default function BasicProjects() {

  const [projects, setProjects] = useState( BasicProject );

  return (
      <div className="w-full py-12">
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 mx-auto">
        <div className="space-y-2 text-center">
          <h3 className="text-3xl font-bold sm:text-4xl uppercase tracking-wide">My Basic Projects</h3>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-300 font-semibold">
            A collection of my work. I love to create and build things.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {
             projects ? (
                projects.map((project) => {
                  return (
                    <div key={project.id} className="flex flex-col items-start gap-1 border-none rounded-lg p-5 w-[20rem] min-h-[150px] bg-slate-900 hover:bg-slate-800 shadow-xl">
                      <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                      <p className="text-sm flex-1 text-left leading-6 text-gray-300">{project.description}</p>
                
                        <h1 className="flex flex-wrap text-sm italic text-yellow-200 items-center">Tech-Stack: 
                          {
                            project.techstack.map((tech, index) => {
                              return (
                                <span key={index} className="text-xs px-1 py-1 rounded-md text-gray-400 "> {tech} ,</span>
                              );
                            })
                          }
                          </h1>
                     
                      <div className="btn text-sm font-normal flex gap-5 px-3">
                        <Link to={project.preview} referrerPolicy="no-referrer"><button className="hover:text-yellow-200">Click here to see</button></Link>
                      </div>
                    </div>
                  );
                })
             ) : <p>Loading...</p>
          }
        </div>
      </div>
    </div>
  )
}