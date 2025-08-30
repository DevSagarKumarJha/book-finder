import React from "react";
import BookCard from "./BookCard";


export default function BooksGrid({ books = [], onToggleSave = () => {}, saved = [] }) {
if (!books || books.length === 0) {
return <div className="text-gray-600">No results — try a different query.</div>;
}


return (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
{books.map((b) => (
<BookCard key={b.key} book={b} onToggleSave={onToggleSave} isSaved={saved.some((s) => s.key === b.key)} />
))}
</div>
);
}