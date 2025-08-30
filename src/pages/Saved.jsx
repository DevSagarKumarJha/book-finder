import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import BooksGrid from "../components/BooksGrid";


export default function Saved() {
    const [saved, setSaved] = useLocalStorage("mylib:saved", []);


    const toggleSave = (book) => {
        const next = saved.filter((b) => b.key !== book.key);
        setSaved(next);
    };


    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Saved Books</h2>
            {saved.length === 0 ? (
                <div className="text-gray-600">No saved books yet. Search and save some!</div>
            ) : (
                <BooksGrid books={saved} saved={saved} onToggleSave={toggleSave} />
            )}
        </div>
    );
}