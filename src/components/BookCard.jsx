import React from "react";

export default function BookCard({ book, onToggleSave, isSaved }) {
  const cover = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null;

  return (
    <article className="border rounded-lg bg-white p-3 flex flex-col items-center text-center">
      <div className="w-full mb-3">
        {cover ? (
          <img
            src={cover}
            alt={`Cover of ${book.title}`}
            className="w-full h-48 object-cover rounded"
          />
        ) : (
          <div className="w-full h-48 flex flex-col justify-center items-center bg-gray-100 rounded text-gray-600 p-2">
            <h3 className="font-semibold text-sm line-clamp-2">{book.title || "Untitled"}</h3>
            <p className="text-xs">{(book.author_name && book.author_name.join(", ")) || book.author || "Unknown author"}</p>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-sm line-clamp-2">{book.title || "Untitled"}</h3>
      <p className="text-xs text-gray-600">
        {(book.author_name && book.author_name.join(", ")) || book.author || "Unknown author"}
      </p>
      <p className="text-xs text-gray-500">{book.first_publish_year || book.year || "—"}</p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => onToggleSave(book)}
          className={`px-3 py-1 rounded text-sm ${isSaved ? "bg-red-100 text-red-700" : "bg-blue-50 text-blue-700"}`}
        >
          {isSaved ? "Unsave" : "Save"}
        </button>
        <a
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm"
        >
          View
        </a>
      </div>
    </article>
  );
}
