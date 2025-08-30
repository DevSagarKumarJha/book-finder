import React, { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(20);

    const [sort, setSort] = useState("relevance");


    // debounce for real-time search
    useEffect(() => {
        const handler = setTimeout(() => {
            if (query.trim()) {
                onSearch(query.trim(), {
                    fields: "key,title,author_name,first_publish_year,cover_i,subject",
                    limit,
                    sort: sort !== "relevance" ? sort : undefined,
                });
            }
        }, 500);
        return () => clearTimeout(handler);
    }, [query, limit, sort]);


    const submit = (e) => {
        e?.preventDefault?.();
        if (!query.trim()) return;
        onSearch(query.trim(), {
            fields: "key,title,author_name,first_publish_year,cover_i,subject",
            limit,
            sort: sort !== "relevance" ? sort : undefined,
        });
    };


    return (
        <form onSubmit={submit} className="flex flex-wrap gap-2 items-center mb-4">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books by title…"
                className="flex-1 border rounded px-4 py-2 focus:outline-none"
            />
            <select value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="border rounded px-2 py-2">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded px-2 py-2">
                <option value="relevance">Relevance</option>
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
                <option value="random">Random</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">Search</button>
        </form>
    );
}