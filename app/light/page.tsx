"use client"
import { useState } from "react";
function LightPage() {
    const [isLightOn, setIsLightOn] = useState(false);
    return (
        <div>
            <div className="text-center mt-6 p-4">
                <h1 className="text-3xl">บทเรียนที่ 1 State ของการเปิด / ปิด</h1>
            </div>
            <div className="flex justify-center mt-10">
                <button type="button" className="bg-green-300 p-5 rotate-2xl text-xl cursor-pointer hover:bg-red-300"
                    onClick={() => setIsLightOn(!isLightOn)}>
                    เปิด - ปิด หลอดไฟ
                </button>
            </div>
            <div className="text-center text5xl mt-4">
                <h1>สถานะของหลอดไฟ: {isLightOn ? "เปิด" : "ปิด"}</h1>
                <div className="flex justify-center">
                {isLightOn ? (<img src="https://www.w3schools.com/js/pic_bulbon.gif" />) :
                    (<img src="https://www.w3schools.com/js/pic_bulboff.gif" />)}
            </div>
        </div>
    </div>
    );
}
export default LightPage;