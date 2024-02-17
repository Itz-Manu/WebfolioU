import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BasicProject } from './ProjectDetails';

export default function BasicProjects() {

  const [projects, setProjects] = useState(BasicProject);

  return (
    <section className="w-full py-12 ">
      <div className="w-full py-12">
      <div className="container grid max-w-4xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 mx-auto">
        <div className="space-y-2 text-center">
          <h3 className="text-3xl font-bold sm:text-4xl uppercase tracking-wide">My Basic Projects</h3>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-300 font-semibold">
            A collection of my work. I love to create and build things.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {
              projects.map((project) => {
                return (
                  <div key={project.id} className="flex flex-col items-start gap-1 border-none rounded-lg p-5 min-h-[150px] bg-slate-900 hover:bg-slate-800 shadow-xl">
                    <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                    <p className="text-sm flex-1 text-left leading-6 text-gray-300">{project.description}</p>
                    <div className="btn text-sm font-normal flex gap-5 px-3">
                      <Link to={project.preview} referrerPolicy="no-referrer"><button className="hover:text-red-400">Click here to see</button></Link>
                    </div>
                  </div>
                );
              })
          }
        </div>
      </div>
    </div>
    </section>
  )
}