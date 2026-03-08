import React from "react";
import tutorials from "../assets/tutorials";
import { assets } from "../assets/assets";

const Trending = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Trending Tutorials
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Most-watched lessons from our global network of experts.
            </p>
          </div>

          <button className="text-blue-600 cursor-pointer font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Browse all tutorials
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tutorials.slice(0,4).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={course.image}
                alt=""
                className="h-40 w-full object-cover"
              />

              <div className="p-4 flex flex-col grow">
                <p className="text-xs text-blue-500 font-semibold uppercase">
                  {course.category}
                </p>

                <h3 className="font-semibold mt-1 text-sm leading-snug min-h-10">
                  {course.title}
                </h3>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                  <span>{course.author}</span>
                  <span>⭐ {course.rating}</span>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  {course.students}
                </p>

                <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;