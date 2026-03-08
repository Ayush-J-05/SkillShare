import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useClerk, UserButton, useUser } from '@clerk/react'

const Navbar = () => {
    const {openSignIn} = useClerk();
    const {user} = useUser()
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Browse Tutorials", path: "/tutorials" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
    ];

    const linkStyle = ({ isActive }) =>
        `relative text-sm font-medium transition duration-300
        ${isActive 
            ? "text-blue-500" 
            : "text-slate-700 dark:text-slate-300 hover:text-blue-500"
        }`;

    return (
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-10 py-4 bg-background-light dark:bg-background-dark">

            {/* Left Section */}
            <div className="flex items-center gap-8">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <Link to="/" className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-[-0.015em] transition duration-300 group-hover:text-blue-500">
                        SkillShare
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-9">
                    
                    {navItems.map((item) => (
                        <NavLink key={item.name} to={item.path} className={linkStyle}>
                            {({ isActive }) => (
                                <>
                                    {item.name}

                                    {/* Animated underline */}
                                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
                                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                </>
                            )}
                        </NavLink>
                    ))}

                </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Sign In Button */}
                {user ? <UserButton /> : <button onClick={e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full cursor-pointer'>Login</button>}
                
            </div>
        </header>
    );
};

export default Navbar;