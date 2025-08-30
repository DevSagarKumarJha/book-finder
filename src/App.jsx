import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";


export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="bg-gradient-to-r from-gray-200 via-white to-bg-slate-300 text-black p-4">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-semibold flex items-center gap-2">📚 MyLib</h1>
                    <nav className="flex gap-4">
                        <NavLink to="/"
                            className={({ isActive }) =>
                                `hover:underline ${isActive ? "font-semibold underline" : ""}`
                            }>Search</NavLink>
                        <NavLink to="/saved"
                            className={({ isActive }) =>
                                `hover:underline ${isActive ? "font-semibold underline" : ""}`
                            }
                            end>Saved</NavLink>
                    </nav>
                </div>
            </header>


            <main className="max-w-5xl mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/saved" element={<Saved />} />
                </Routes>
            </main>


            <footer className="text-center p-4 text-sm text-gray-600">
                Built with ❤️ using Open Library API — remember to include a descriptive User-Agent when making API calls.
            </footer>
        </div>
    );
}