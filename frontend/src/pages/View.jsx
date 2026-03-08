import React from "react";
import { useParams } from "react-router-dom";
import  tutorials  from "../assets/tutorials";

export default function View() {

  const { id } = useParams();

  const tutorial = tutorials.find((t) => t.id === Number(id));

  if (!tutorial) {
    return <div className="p-10">Tutorial not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <div className="grid grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="col-span-2">

          {/* Video */}
          <div className="bg-black rounded-xl overflow-hidden">
            <video
              src={tutorial.video}
              controls
              className="w-full h-105"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mt-6">
            {tutorial.title}
          </h1>

          {/* Instructor */}
          <div className="mt-3 text-gray-600">
            {tutorial.author} • {tutorial.students}
          </div>

          {/* About */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-2">
              About This Lesson
            </h2>

            <p className="text-gray-600">
              {tutorial.description}
            </p>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="bg-white p-5 rounded-xl shadow">

          <h3 className="font-semibold mb-4">
            Student Reviews
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">4.8</span>
            <span className="text-yellow-500">★★★★★</span>
          </div>

          <p className="text-sm text-gray-500">
            Course Rating • 1.2k reviews
          </p>

        </div>

      </div>
    </div>
  );
}