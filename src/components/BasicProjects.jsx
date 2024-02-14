import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicProjects() {
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
          <div className="flex flex-col items-start gap-1 border-none rounded-lg p-5 min-h-[150px] dark:border-gray-800  dark:bg-slate-700  hover:bg-slate-800 shadow-xl">
            <h4 className="font-semibold text-lg mb-1">Password Generator</h4>
            <p className="text-sm flex-1 text-left leading-6 text-gray-300">
              Instantly generate and copy unique, strong passwords for enhanced security!
            </p>
            <div className="btn text-sm font-normal flex gap-5 px-3">
              <a href="https://vaultforge.vercel.app/" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">Click here to see</button></a> 
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 border-none rounded-lg p-5 min-h-[150px] dark:border-gray-800  dark:bg-slate-700  hover:bg-slate-800 shadow-xl">
            <h4 className="font-semibold text-lg mb-1">Recipe App</h4>
            <p className="text-sm flex-1 text-left leading-6 text-gray-300">
              Discover delicious recipes for every occasion. Cook with confidence and creativity!
            </p>
            <div className="btn text-sm font-normal flex gap-5 px-3">
              <Link to="/Kitchen"><button className="hover:text-yellow-300">Click here to see</button></Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1 border-none rounded-lg p-5 min-h-[150px] dark:border-gray-800  dark:bg-slate-700  hover:bg-slate-800 shadow-xl">
            <h4 className="font-semibold text-lg mb-1">To-Do List</h4>
            <p className="text-sm flex-1 text-left leading-6 text-gray-300">
              Effortlessly manage tasks and stay productive with our streamlined to-do app.
            </p>
            <div className="btn text-sm font-normal flex gap-5 px-3">
              <Link to="/todo"><button className="hover:text-yellow-300">Click here to see</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
