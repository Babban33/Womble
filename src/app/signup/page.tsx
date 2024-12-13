"use client";
import Image from "next/image";
import { useState } from "react";

export default function SignupPage() {
    const [activeTab, setActiveTab] = useState("register");
    return (
        <div className="flex h-screen">
            {/* Left Column: Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-12">
                <div className="mb-8 flex flex-col items-center">
                    <h1 className="text-4xl font-bold mt-4">WOMBLE</h1>
                </div>
                {/* Tab Navigation */}
                <div className="flex space-x-8 text-lg mb-8">
                    <button 
                        className={`cursor-pointer ${activeTab === "login" ? "text-white border-b-2 border-red-500" : "text-gray-400"}`}
                        onClick={() => setActiveTab("login")}
                    >
                        Login
                    </button>
                    <button 
                        className={`cursor-pointer ${activeTab === "register" ? "text-white border-b-2 border-red-500" : "text-gray-400"}`} 
                        onClick={() => setActiveTab("register")}
                    >
                        Register
                    </button>
                </div>
                <form className="w-full max-w-sm space-y-4">
                    {activeTab === "register" && (
                        <div className="relative">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a6 6 0 1116 0H2z" />
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                id="name" 
                                className="block w-full bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 focus:ring-neon-green focus:border-neon-green focus:shadow-neon" 
                                placeholder="Your Name" 
                            />
                        </div>
                    )}
                    <div className="relative">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <input 
                            type="email" 
                            id="email" 
                            className="block w-full bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 focus:ring-neon-green focus:border-neon-green focus:shadow-neon" 
                            placeholder="Email" 
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 1a4 4 0 00-4 4v2a2 2 0 01-2 2v6a2 2 0 002 2h8a2 2 0 002-2v-6a2 2 0 01-2-2V5a4 4 0 00-4-4zm-1 6V5a1 1 0 112 0v2H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input 
                            type="password" 
                            id="password" 
                            className="block w-full bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 focus:ring-neon-green focus:border-neon-green focus:shadow-neon" 
                            placeholder="Password" 
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-red-500 text-white py-2 rounded-full hover:bg-red-600 px-4 shadow-md shadow-red-500/50"
                        >
                            Join for free
                        </button>
                    </div>
                </form>
                {/* Social Login */}
                <div className="mt-6 text-sm text-gray-400">or continue with</div>
                <div className="flex space-x-4 mt-4">
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-md shadow-gray-700/50">
                        <svg width={24} height={24} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7519.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M174,7379 L184,7379 L184,7370 L174,7370 L174,7379 Z M164,7379 L173,7379 L173,7370 L164,7370 L164,7379 Z M174,7369 L184,7369 L184,7359 L174,7359 L174,7369 Z M164,7369 L173,7369 L173,7359 L164,7359 L164,7369 Z" fill="#ef4444"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-md shadow-gray-700/50">
                        <svg width={24} height={24} viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]" fill="#ef4444"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-md shadow-gray-700/50">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z" fill="#ef4444" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Column: Background Image with Title and Subtitle */}
            <div className="hidden lg:flex w-1/2 relative">
                <Image 
                    src="/signupbg.jpg" 
                    alt="Background Image" 
                    width={1920} 
                    height={1920} 
                    className="absolute inset-0 object-cover h-screen"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Womble</h1>
                    <p className="text-lg">Find meaningful connections and explore new possibilities.</p>
                </div>
            </div>
        </div>
    );
}
