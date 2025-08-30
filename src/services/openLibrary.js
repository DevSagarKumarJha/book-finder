export async function searchBooks(query, options = {}) {
    if (!query) throw new Error("Query is required");


    const defaultFields = "key,title,author_name,first_publish_year,cover_i,isbn";
    const params = new URLSearchParams();
    params.set("title", query);
    params.set("fields", options.fields || defaultFields);
    params.set("limit", options.limit || 20);
    if (options.page) params.set("page", options.page);
    if (options.sort) params.set("sort", options.sort);
    if (options.ebook_access) params.set("ebook_access", options.ebook_access);


    const url = `https://openlibrary.org/search.json?${params.toString()}`;


    const res = await fetch(url, {
        headers: {
            // polite header for API provider
            "User-Agent": "mylib/1.0 (dev@example.com)"
        }
    });


    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`OpenLibrary error: ${res.status} ${res.statusText} ${text}`);
    }


    const data = await res.json();


    // Map docs to friendly objects. Keep original docs under `docs` for pagination handling
    const docs = (data.docs || []).map((d) => ({
        key: d.key,
        title: d.title,
        author_name: d.author_name,
        first_publish_year: d.first_publish_year,
        cover_i: d.cover_i,
        isbn: d.isbn,
        // convenience property
        cover: d.cover_i ? `https://covers.openlibrary.org/b/id/${d.cover_i}-M.jpg` : null,
    }));


    return {
        start: data.start,
        num_found: data.num_found,
        docs,
    };
}