import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/Searchbar";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <SearchBar />
      <Trending />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;