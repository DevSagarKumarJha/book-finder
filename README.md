# 📚 Book Finder

## 📖 Project Overview & Purpose
**Book Finder** is a web application that allows users to **search for books using the Open Library Search API**.  
It provides real-time search results with options to **sort, filter, and save favorite books**.  

The app displays book details such as cover images, titles, authors, and publication years.  
If a cover image is missing, the book’s title and author are shown in a placeholder.

**Target Audience:**
- Students and researchers looking for references.
- Avid readers searching for new books.
- Anyone who wants a quick way to browse Open Library’s vast collection.

---

## 🚀 Features
- 🔍 **Real-time debounced search** by title.
- 📚 **Book results display** with uniform card sizes.
- 🖼️ **Responsive cover images** (fallback to title/author if missing).
- ⚡ **Sorting options**: relevance, newest, oldest, random.
- 🎯 **Filters** by category (fiction, history, science, fantasy, etc.).
- 💾 **Save/Unsave books** for later.
- 🔗 **View full details** on Open Library.
- 🧭 **Navigation with active state highlighting** (Search, Saved).

---

## 🛠️ Tech Stack
- **React 18** (UI framework)
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **React Router** (routing)
- **Open Library API** (book data)

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (>= 16)
- npm or yarn

### Installation
```bash
git clone https://github.com/DevSagarKumarJha/book-finder.git
cd book-finder
npm install
npm run dev
```
Then open your browser at:
👉 http://localhost:5173

### 📌 Usage

Enter a book title in the search bar.

Results update in real-time.

Use sort dropdown to reorder results.

Apply filters to refine categories.

Save favorite books to view later under Saved.

Click View to open the book’s page on Open Library.

## 🐞 Known Issues / Limitations

API sometimes returns missing fields (e.g., no author or cover).

Category filters are limited; Open Library’s metadata is inconsistent.

No dedicated loading spinner yet (results may look empty briefly).

Pagination is basic and could be improved.

No offline support.

## 🗒️ Roadmap / Next Steps

 Add loading spinner and error states.

 Improve pagination controls (page numbers).

 Expand filter options (language, availability, etc.).

 Add responsive layout improvements.

 Implement tests (Jest/React Testing Library).

 Consider adding backend proxy for headers & caching.

## 🤝 Contributing

Contributions are welcome! Please:

Fork the repo.

Create a feature branch.

Open a PR with a clear description of changes.

## 📜 License

This project is MIT Licensed.
See the LICENSE file for details.