import React, { useState } from "react";
import { Upload, CheckCircle, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SignIn, useUser } from '@clerk/react'

export default function UploadTutorial() {

    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const { isSignedIn, isLoaded } = useUser();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setVideoFile(file);
        setVideoPreview(URL.createObjectURL(file));
    };

    if (!isSignedIn) {
        return (
            <div className="flex justify-center items-center h-screen">
                <SignIn />
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-10">

                <h1 className="text-2xl font-bold mb-6">Upload Your Tutorial</h1>
                <p className="text-gray-500 mb-8">
                    Share your expertise and inspire millions of creative students.
                </p>

                <div className="grid grid-cols-3 gap-8 mb-6">
                    {/* LEFT CONTENT */}
                    <div className="col-span-2 space-y-6">

                        {/* Tutorial Details */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h2 className="font-semibold mb-4">Tutorial Details</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-600">Tutorial Title</label>
                                    <input
                                        className="w-full mt-1 border rounded-lg p-2"
                                        placeholder="e.g., Master Class in Digital Illustration with Procreate"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Category</label>
                                    <select className="w-full mt-1 border rounded-lg p-2">
                                        <option>Programing</option>
                                        <option>Design</option>
                                        <option>Cooking</option>
                                        <option>Marketing</option>
                                        <option>Business</option>
                                        <option>Music</option>
                                        <option>Photography</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Description</label>
                                    <textarea
                                        rows="4"
                                        className="w-full mt-1 border rounded-lg p-2"
                                        placeholder="What will your students learn? Be specific about the outcomes and projects."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Video Upload */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h2 className="font-semibold mb-4">Video Lessons</h2>

                            {!videoPreview ? (
                                <div className="border-2 border-dashed rounded-xl p-10 text-center">
                                    <p className="mb-2 font-medium">Drag and drop your tutorial video</p>
                                    <p className="text-gray-500 text-sm mb-4">
                                        High quality MP4, MOV or AVI files (Max 2GB per lesson)
                                    </p>

                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="fileUpload"
                                    />

                                    <label
                                        htmlFor="fileUpload"
                                        className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Choose Files
                                    </label>
                                </div>
                            ) : (
                                <div className="space-y-4">

                                    {/* Video Preview */}
                                    <video
                                        src={videoPreview}
                                        controls
                                        className="w-full rounded-lg"
                                    />

                                    {/* File Info */}
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>{videoFile?.name}</span>
                                        <span>{(videoFile?.size / 1024 / 1024).toFixed(2)} MB</span>
                                    </div>

                                    {/* Change Video */}
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="fileUpload"
                                    />

                                    <label
                                        htmlFor="fileUpload"
                                        className="cursor-pointer text-purple-600 font-medium"
                                    >
                                        Change Video
                                    </label>

                                </div>
                            )}

                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="bg-white p-6 rounded-2xl shadow-md w-87.5 h-100">

                        <h2 className="text-lg font-semibold mb-5">Publishing Options</h2>

                        <button className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium mb-3">
                            <Upload size={18} />
                            Publish Tutorial
                        </button>

                        <hr className="mb-6" />

                        <div className="flex gap-3 mb-5">
                            <CheckCircle className="text-green-500 mt-1" size={20} />
                            <div>
                                <h4 className="font-medium">Content Review</h4>
                                <p className="text-sm text-gray-500">
                                    Your tutorial will be reviewed for quality standards within 24 hours.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 bg-purple-50 border border-purple-100 p-4 rounded-lg">
                            <Lightbulb className="text-purple-600 mt-1" size={20} />
                            <div>
                                <h4 className="font-medium text-purple-700">Instructor Tip</h4>
                                <p className="text-sm text-gray-600">
                                    Tutorials with clear, descriptive titles and high-quality thumbnails
                                    get 3x more students in the first week.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}