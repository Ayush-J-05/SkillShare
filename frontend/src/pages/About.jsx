import React from 'react'
import Navbar from '../components/Navbar'
import { CheckCircle, Globe, Lightbulb, Repeat, Users, Star } from "lucide-react";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const values = [
    {
        icon: <Lightbulb size={22} />,
        title: "Innovation",
        description:
            "We constantly evolve our platform to make learning more intuitive and impactful.",
    },
    {
        icon: <Repeat size={22} />,
        title: "Reciprocity",
        description:
            "The best way to learn is to teach. Our community thrives on mutual exchange.",
    },
    {
        icon: <Users size={22} />,
        title: "Community",
        description:
            "We foster a sense of belonging where every member’s contribution is valued.",
    },
    {
        icon: <Star size={22} />,
        title: "Excellence",
        description:
            "We set high standards for our peer-to-peer interactions and technical infrastructure.",
    },
];

const About = () => {
    return (
        <div>
            <Navbar />

            <section className="bg-[#ECE9F6] py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

                    {/* Left Content */}
                    <div>
                        <p className="text-indigo-600 font-semibold tracking-wide text-sm mb-4">
                            OUR STORY
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Redefining how <br />
                            the world learns <br />
                            together.
                        </h1>

                        <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
                            SkillShare was born from a simple idea: everyone has something to
                            teach, and everyone has something to learn. We're building a world
                            where professional growth isn't gated by tuition, but fueled by
                            community.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/tutorials" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md">
                                Start Your Journey
                            </Link>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Group learning"
                            className="rounded-2xl w-full object-cover shadow-lg"
                        />

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full text-xl">
                                👥
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">5k+</h4>
                                <p className="text-sm text-gray-500">Active Users</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Second component */}
            <section className="bg-white py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Democratizing Growth
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                            Our mission is to create a global ecosystem where knowledge is the
                            primary currency. We believe that by connecting individuals
                            directly, we can bypass traditional barriers to education and
                            career advancement.
                        </p>

                        {/* Feature Cards */}
                        <div className="space-y-4">

                            <div className="flex items-start gap-4 bg-gray-200/70 hover:bg-gray-200 transition p-5 rounded-2xl">
                                <div className="bg-indigo-600 text-white p-2 rounded-full">
                                    <CheckCircle size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Trust-Based Learning
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Peer reviews ensure high-quality exchanges.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-gray-200/70 hover:bg-gray-200 transition p-5 rounded-2xl">
                                <div className="bg-indigo-600 text-white p-2 rounded-full">
                                    <Globe size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Global Accessibility
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Connect with experts from Tokyo to Toronto.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Third Component */}

            <section className="bg-gray-100 py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
                        Values that Drive Us
                    </h2>

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="bg-indigo-200 text-blue-900 p-4 rounded-full">
                                        {value.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold mb-3">
                                    {value.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

        </div>
        
    )
}

export default About
