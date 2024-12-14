'use client';
import { login, signup } from "./actions";

interface UserFormProps { activeTab: string;} 
export default function UserForm( {activeTab}: UserFormProps){
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const nameInput = (document.getElementById("name") as HTMLInputElement)?.value.trim();
        const emailInput = (document.getElementById("email") as HTMLInputElement)?.value.trim();
        const passwordInput = (document.getElementById("password") as HTMLInputElement)?.value.trim();
    
        // Basic validation
        if (activeTab === "register" && !nameInput) {
          alert("Please enter your name");
          return;
        }
        if (!emailInput || !passwordInput) {
          alert("Please fill in all required fields");
          return;
        }
    
        // Log input values
        console.log("Name:", nameInput || "(Not Applicable)");
        console.log("Email:", emailInput);
        console.log("Password:", passwordInput);

        const formData = new FormData();
        if (activeTab === "register") {
            formData.append("name", nameInput);
        }
        formData.append("email", emailInput);
        formData.append("password", passwordInput);

        const name = formData.get("name"); 
        console.log("Name:", name);

        if (activeTab === "login") {
            await login(formData);
        } else if (activeTab === "register") {
            await signup(formData);
        }
    };
    return(
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
                {activeTab==="login"? (
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-red-500 text-white py-2 rounded-full hover:bg-red-600 px-4 shadow-md shadow-red-500/50"
                    >
                        Login
                    </button>
                    ):(
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-red-500 text-white py-2 rounded-full hover:bg-red-600 px-4 shadow-md shadow-red-500/50"
                    >
                        Join for free
                    </button>
                )}
            </div>
        </form>
    )
}