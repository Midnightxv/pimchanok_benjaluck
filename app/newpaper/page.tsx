"use client";
import axios from "axios";
import { useEffect } from "react";

function newPaperPage() {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    useEffect(() => {
        async function fetchNews() {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
            const data = await res.json();
            console.log(data.articles);
        };
        fetchNews();
    }, [apiKey]);

return (
    <div>
        <h1 className="text-4xl text-center mt-5">อ่านข่าวได้ที่นี่่</h1>
    </div>
) 
}
export default newPaperPage;