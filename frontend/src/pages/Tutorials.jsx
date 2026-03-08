import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SignIn, useUser } from '@clerk/react'
import tutorials, { categories } from "../assets/tutorials";
import { Link } from "react-router-dom";

const Tutorials = () => {

  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const { isSignedIn, isLoaded } = useUser();

  // filter
  const filteredTutorials =
    selectedCategory === "All Topics"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === selectedCategory);

  // Wait for Clerk to load
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SignIn />
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="px-10 py-4 grow">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">All Tutorials</h1>
          <p className="text-gray-500">
            Master new skills with over 25,000 expert-led video courses.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 ">
          {categories.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedCategory(topic)}
              className={`px-4 py-2 rounded-full cursor-pointer transition ${selectedCategory === topic
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tutorials.map((course) => (
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

                <Link to={`/view/${course.id}`}
                  className="cursor-pointer mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Tutorials;