"use client";
import { useState } from "react";
import RightColumn from "./rightcol";
import UserForm from "./userForm";

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
                <UserForm activeTab={activeTab}/>
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
            <RightColumn/>
        </div>
    );
}
