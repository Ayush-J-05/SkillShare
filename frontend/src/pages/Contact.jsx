import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (

        <>
            <Navbar />
            <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h2>
                        <p className="text-slate-600 max-w-2xl leading-relaxed">
                            Have a question about SkillShare? Whether you're looking to share your
                            expertise or learn something new, we're here to help you connect and grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Contact Info Cards */}
                        <div className="lg:col-span-4 space-y-6">

                            {/* Email Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Email Us</h3>
                                        <p className="text-sm text-slate-500 mb-3">Our support team typically responds within 24 hours.</p>
                                        <a href="mailto:support@skillswap.com" className="text-indigo-600 font-semibold hover:underline">
                                            support@skillshare.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            
                            {/* Call Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Call Us</h3>
                                        <p className="text-sm text-slate-500 mb-2">Available Mon-Fri, 9am - 5pm IST.</p>
                                        <p className="text-indigo-600 font-semibold">+91 8128189872</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                        <input type="text" placeholder="Name" 
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Email id"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us more about your request..."
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-200">
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;