import React, { useState } from "react";
import { LatestProject } from "./ProjectDetails";


export default function LatestProjects() {
  const [projects, setProjects] = useState(LatestProject);


  return (
    <div className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl uppercase">
            Latest Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-300 font-semibold">
            Check out some of the recent projects we've been working on.
          </p>
        </div>

        <div  className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {
          projects.map((project) => {
            return (
                <div key={project.id} className="flex flex-col items-start space-y-2 rounded-lg border-gray-200 bg-gray-900 px-4 py-6 text-left md:px-6 md:py-8 hover:bg-gray-800 shadow-xl">
                  <h3 className="font-bold tracking-tight text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-6">{project.description}</p>
                  <div className="btn text-sm font-normal flex gap-5 px-3">
                    <a href={project.preview} target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-red-400">Preview</button></a> 
                    <a href={project.github} target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-red-400">Github</button></a> 
                  </div>
                </div>
            );
          })  
        }
         </div>
      </div>
    </div>
  );
}
