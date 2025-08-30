# Developer Notes

## 🔧 Dev Notes
- **Search debounce**: Currently uses 500ms delay — may need tuning.
- **Sorting**: Uses Open Library’s `sort` param (relevance, new, old, random).

- **Saved Books**: Stored in React state (no persistence yet).

---

## 🧹 Refactoring Ideas
- Extract API calls into a dedicated `services/openLibrary.js`.
- Create a `BookGrid` component for consistent layout.
- Move filter/sort/search controls into a `SearchControls` component.

---

## 🧪 Testing Plans
- Unit test `BookCard` and `SearchBar` components.
- Integration test for search flow.
- Snapshot test for layout consistency.

---

## ⚠️ Known Issues
- Active nav highlighting fixed with `NavLink`, but could improve UX with a background highlight.
- Empty results show no feedback — add a friendly message.
- Cover placeholders could use better design (icons, background color).

---

## 📌 Future Enhancements
- Persistent storage for saved books (**localStorage**).
- User accounts for cloud sync.
- Dark mode toggle.
- Offline-ready with service workers.