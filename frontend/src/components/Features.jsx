import React from "react";
import { assets } from "../assets/assets";

const features = [
    {
        image: assets.browse,
        title: "Browse & Discover",
        description:
            "Explore thousands of expert-led tutorials across programming, design, business, and more.",
    },
    {
        image: assets.watch,
        title: "Watch & Learn",
        description:
            "Follow along with crystal-clear video lessons, download project files, and practice skills in real-time.",
    },
    {
        image: assets.publish,
        title: "Publish Your Skills",
        description:
            "Record your own tutorials, share your unique expertise, and build your professional reputation.",
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Master Any Skill in Minutes
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Our streamlined learning path connects you directly with expert knowledge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 
              shadow-md hover:shadow-2xl hover:-translate-y-3
              transition-all duration-500 ease-in-out cursor-pointer"
                        >
                            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto shrink-0">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;