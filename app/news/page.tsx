"use client";
import { useEffect, useState } from "react";

function NewsPage() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchNews() {
            try {
                setLoading(true);
                const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
                if (!apiKey || apiKey === "YOUR_ACTUAL_API_KEY_HERE") {
                    throw new Error("⚠️ API key not configured. Add your NewsAPI.org key to .env.local");
                }
                const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
                const res = await fetch(url);
                if (!res.ok) throw new Error(`API Error: ${res.status}`);
                const data = await res.json();
                // Ensure articles is always an array
                const articles = Array.isArray(data.articles) ? data.articles : [];
                setNews(articles);
                setError("");
            } catch (err) {
                console.error(err);
                setError(err instanceof Error ? err.message : "Failed to load news");
                setNews([]);
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mt-8 mb-2">Top News Headlines</h1>
                <p className="text-center text-gray-600 mb-8">Click any article to read the full story</p>

                {loading && (
                    <div className="flex justify-center mt-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg max-w-2xl mx-auto mt-10">
                        <p className="text-red-700 font-semibold">{error}</p>
                    </div>
                )}

                {!loading && news.length === 0 && !error && (
                    <div className="text-center mt-20 text-gray-500">
                        <p className="text-lg">No news found</p>
                    </div>
                )}

                {!loading && news.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {news.map((article, index) => (
                            <a
                                key={index}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col"
                            >
                                {article.urlToImage && (
                                    <div className="w-full h-48 overflow-hidden bg-gray-200">
                                        <img
                                            src={article.urlToImage}
                                            alt={article.title}
                                            className="w-full h-full object-cover hover:brightness-90 transition"
                                        />
                                    </div>
                                )}
                                <div className="p-4 flex-grow flex flex-col">
                                    <h2 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-700 text-sm mb-3 flex-grow line-clamp-3">
                                        {article.description || "Click to read more..."}
                                    </p>
                                    {article.source && (
                                        <p className="text-xs text-gray-500 mb-2">
                                            Source: {article.source.name}
                                        </p>
                                    )}
                                    <div className="mt-auto pt-3 border-t border-gray-200">
                                        <span className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                                            Read Full Article →
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewsPage;