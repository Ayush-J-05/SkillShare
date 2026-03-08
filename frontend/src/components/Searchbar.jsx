import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching:", query);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center bg-gray-100 border-4 border-purple-200 rounded-2xl px-4 py-3 shadow-sm">

        {/* Search Icon */}
        <span className="material-symbols-outlined text-purple-600 mr-3">
          search
        </span>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What skill do you want to learn today? (e.g., Video Editing, Python, UI Design)"
          className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-lg"
        />

        {/* Button */}
        <button
          onClick={handleSearch}
          className="ml-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-xl hover:opacity-90 transition"
        >
          Search Tutorials
        </button>

      </div>
    </div>
  );
};

export default SearchBar;