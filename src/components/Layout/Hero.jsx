import React from 'react'

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container p-4 px-5 md:px-6 flex flex-col md:flex-row items-center gap-6 mx-auto">
        <div className="grid gap-4 text-center md:gap-2 md:text-left lg:gap-4 xl:gap-6 2xl:gap-8">
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">Hi, I'm Manu</h1>
            <p className="inline text-xl font-medium tracking-wide md:text-lg dark:text-gray-200 ml-3">
              Aspiring Fronentend Dev,
            </p>
          </div>
          <div className="prose max-w-none font-medium dark:text-white">
            <p>
              I design digital experiences that are both beautiful and functional. My passion for understanding user
              behavior and translating insights into intuitive designs is at the core of my work.
            </p>
          </div>

          <div className='btn flex gap-7 mx-5 my-3 text-black'>
            <button className="px-4 py-2 font-semibold bg-yellow-500 rounded-md shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Hire Me
            </button>
            <button className="px-4 py-2 font-semibold bg-yellow-500 rounded-md shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto md:max-w-none">
          <div className="absolute inset-0 rounded-xl backdrop-blur-3"  />
          <img
            alt="John"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            height="400"
            src="/person.png"
            width="400"
          />
        </div>
      </div>
    </section>
  )
}
