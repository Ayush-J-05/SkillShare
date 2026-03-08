import React from "react";
import { Link, NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="z-10">
            

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-slate-900 dark:text-white">
              Master New Skills Through{" "}
              <span className="text-blue-700">Expert-Led</span> Tutorials.
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              Gain direct access to high-quality video tutorials from industry
              leaders. Learn at your own pace and publish your own expertise to
              a global audience.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              
              <Link to="/tutorials" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all cursor-pointer">
                Explore Tutorials
              </Link>

              <Link to="/upload" className="bg-white dark:bg-slate-800 cursor-pointer border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Share a Tutorial
              </Link>
            </div>

          </div>

          {/* Right Content (Video Card) */}
          <div className="relative">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-2 aspect-video bg-slate-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz9fH_FstL4OFrU9uE_hvTJWYBJPm_BIJIwvlM3t2jHchmEGmgP86WByF6zXpMUEtwS09X50G6qEy2_3yTp8OkpAY_KyAFluyC9P42q_HLWJQXucD_0BMifpawg5D_6DQt-UhfAO00k9gzXyOly2IhY1Wwzy4u6eNb4-Q_ByjQWo5fc_Epbr2OB9tiIiEM-II2PlyhCkZ-xxqsDlGaf6wJ97ECWwQddlyyq5aSIUY6cXlWXCuMPP-RfzGOPXn95gorLvad2zYmnwrA"
                alt="Video tutorial interface showing creative software"
                className="w-full h-full object-cover"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer hover:bg-black/30 transition-all">
            
              </div>
            </div>

            {/* Bottom Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs border border-slate-100 dark:border-slate-700">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="material-symbols-outlined text-green-600">
                  movie
                </span>
              </div>
              <div>
                <p className="text-sm font-bold">2,500+ Video Lessons</p>
                <p className="text-xs text-slate-500">
                  High-definition direct learning
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;