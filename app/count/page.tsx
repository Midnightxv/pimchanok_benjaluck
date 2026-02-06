"use client"
import { useState } from "react";

function CountPage() {
    const [count, setCount] = useState(1);
    return <div>
        <div className="text-center mt-5 p-3">
            <h1 className="text-center text-3xl">บทเรียนที่2 State ของการเพิ่มลดตัวเลข</h1>
        </div>
        <div className="text-center mt-6 p-4">
            <h1 className="text=center text-5xl">{count}</h1>
        </div>
        <div className="flex justify-center ml-5">
            <button className="p-8 text-2xl bg-purple-400 rounded-lg cursor-pointer" onClick={() => setCount(count + 1)}>เพิ่ม</button>
        </div>
        <div className="flex justify-center ml-5 p-5">
            <button className="p-8 text-2xl bg-pink-400 rounded-lg cursor-pointer" onClick={() => setCount(count - 1)}>ลด</button>
        </div>
    </div>
}

export default CountPage;