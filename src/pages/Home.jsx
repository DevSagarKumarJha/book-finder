import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BooksGrid from "../components/BooksGrid";
import { searchBooks } from "../services/openLibrary";
import useLocalStorage from "../hooks/useLocalStorage";


export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [saved, setSaved] = useLocalStorage("mylib:saved", []);


    const handleSearch = async (query, options = {}) => {
        if (!query) return;
        setError(null);
        setLoading(true);
        try {
            const results = await searchBooks(query, options);
            setBooks(results.docs);
        } catch (err) {
            console.error(err);
            setError(err.message || "Search failed");
        } finally {
            setLoading(false);
        }
    };


    const toggleSave = (book) => {
        const exists = saved.some((b) => b.key === book.key);
        const next = exists ? saved.filter((b) => b.key !== book.key) : [book, ...saved];
        setSaved(next);
    };


    return (
        <div>
            <SearchBar onSearch={handleSearch} />


            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
            )}


            {loading ? (
                <div className="text-center p-8">Loading…</div>
            ) : (
                <BooksGrid books={books} onToggleSave={toggleSave} saved={saved} />
            )}
        </div>
    );
}