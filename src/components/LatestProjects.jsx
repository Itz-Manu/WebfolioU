import React from "react";

export default function LatestProjects() {
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
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col items-start space-y-2 border-none rounded-lg border-gray-200 bg-white px-4 py-6 text-left md:px-6 md:py-8 dark:bg-slate-800 hover:bg-slate-900 shadow-xl">
            <h3 className="font-bold tracking-tight text-lg">Blog App</h3>
            <p className="text-sm text-gray-400 leading-6">
                Explore captivating stories and insightful articles on our dynamic blog website. 
                Engage with diverse topics and join the conversation today!
            </p>
            <div className="btn text-sm font-normal flex gap-5 px-3">
              <a href="https://code-and-blog.vercel.app/" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">View</button></a> 
              <a href="https://github.com/SAGARSINGH-1/CodeAndBlog" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">Github</button></a> 
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-none rounded-lg border-gray-200 bg-white px-4 py-6 text-left md:px-6 md:py-8 dark:bg-slate-800 hover:bg-slate-900 shadow-xl">
            <h3 className="font-bold tracking-tight text-lg">Quizz App</h3>
            <p className="text-sm text-gray-400 leading-6">
            Dive into fun and knowledge with our interactive quiz app. 
            Test your skills, learn new facts, and challenge friends!
            </p>
            <div className="btn text-sm font-normal flex gap-5 px-3">
              <a href="https://quiz-app-clg.vercel.app/" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">View</button></a> 
              <a href="https://github.com/SAGARSINGH-1/Quiz-App" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">Github</button></a> 
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-none rounded-lg border-gray-200 bg-white px-4 py-6 text-left md:px-6 md:py-8 dark:bg-slate-800 hover:bg-slate-900 shadow-xl">
            <h3 className="font-bold tracking-tight text-lg">Weather App</h3>
            <p className="text-sm text-gray-400 leading-6">
            Empowering you with real-time weather insights. Our app delivers accurate forecasts, alerts, 
            and personalized weather updates, wherever you go!
            </p>
            <div className="btn text-sm font-normal flex gap-5 px-3">
              <a href="https://astroclima.vercel.app/" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">View</button></a> 
              <a href="https://github.com/Itz-Manu/AstroClima" target="_blank"  referrerPolicy="no-referrer"><button className="hover:text-yellow-300">Github</button></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
