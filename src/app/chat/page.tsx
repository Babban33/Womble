"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const onlineMembers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
];

export default function Chatscreen() {
    const [selectedContact, setSelectedContact] = useState<number | null>(null);
    const [messages, setMessages] = useState<{ [key: number]: string[] }>({});
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (selectedContact !== null && input.trim()) {
            setMessages((prev) => ({
                ...prev,
                [selectedContact]: [...(prev[selectedContact] || []), input],
            }));
            setInput("");
        }
    };

    return (
        <div className="h-screen flex flex-col md:flex-row bg-gray-900 text-white">
            {/* Sidebar */}
            {(selectedContact === null || window.innerWidth >= 768) && (
                <div className="md:w-1/4 bg-gray-800 border-r border-gray-700 flex flex-col absolute md:static inset-0 md:relative">
                    <h2 className="p-4 text-xl font-bold border-b border-gray-700">Online Members</h2>
                    <div className="flex-1 overflow-y-auto">
                        {onlineMembers.map((member) => (
                            <div
                                key={member.id}
                                onClick={() => setSelectedContact(member.id)}
                                className={`p-4 cursor-pointer flex items-center ${
                                    selectedContact === member.id
                                        ? "text-white border-b-2 border-red-500"
                                        : "text-gray-400"
                                } hover:bg-gray-700`}
                            >
                                <FaUserCircle className="text-2xl mr-3" />
                                {member.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Chat Screen */}
            <div className="flex-1 flex flex-col">
                {selectedContact !== null ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-700 bg-gray-800 flex items-center justify-between">
                            <div className="flex items-center">
                                <FaUserCircle className="text-2xl mr-3" />
                                <h2 className="text-xl font-bold">
                                    {
                                        onlineMembers.find((member) => member.id === selectedContact)
                                            ?.name
                                    }
                                </h2>
                            </div>
                            {/* Back Button for Mobile */}
                            <button
                                onClick={() => setSelectedContact(null)}
                                className="md:hidden text-gray-400 hover:text-white"
                            >
                                Back
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {(messages[selectedContact] || []).map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 p-3 rounded-md ${
                                        index % 2 === 0
                                            ? "bg-blue-600 text-white self-end"
                                            : "bg-gray-700 text-white self-start"
                                    }`}
                                >
                                    {msg}
                                </div>
                            ))}
                        </div>

                        {/* Input Box */}
                        <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center">
                            <input
                                type="text"
                                placeholder="Type a message"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-gray-700 text-white p-2 rounded-md outline-none mr-2"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600"
                            >
                                Send
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        <p>Select a member to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    );
}
