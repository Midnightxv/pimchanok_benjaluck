function FormPag() {
    return (
        <div className="h-screen  bg-red-800 via-green-800 to-black flex flex-col">
            <div className="mt-10">
                <h1 className="text-4xl text-center text-white font-bold drop-shadow-lg">ลงทะเบียนเข้าสู่ระบบ</h1>
                <p className="text-center text-white text-lg mt-2">กรุณากรอกข้อมูลของคุณ</p>
            </div>
            <div className="flex justify-center flex-1 items-center">
                <form className="w-150 space-y-20 bg-white bg-opacity-70 p-8 rounded-xl border border-grey border-opacity-50 shadow-2xl backdrop-blur-md ">
                    <div>
                        <h2 className="text-black font-semibold mb-2">กรุณาระบุ E-Mail</h2>
                        <input type="text" placeholder="your@email.com" className="input input-bordered w-full bg-red-400 bg-opacity-40 border-red-600 text-purple-100 placeholder:text-white" />
                    </div>
                    <div>
                        <h2 className="text-black font-semibold mb-2">กรุณาระบุ Password</h2>
                        <input type="password" placeholder="••••••••" className="input input-bordered w-full bg-red-400 bg-opacity-40 border-red-600 text-purple-100 placeholder:text-white" />
                    </div>
                    <button className="btn w-full  from-red-600 to-red-700 border-0 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg">ลงทะเบียน</button>
                </form>
            </div>
        </div>
    );
}

export default FormPag;