function FormPag() {
    return (
        <div className="h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black flex flex-col">
            <div className="mt-10">
                <h1 className="text-4xl text-center text-purple-200 font-bold drop-shadow-lg">ลงทะเบียนเข้าสู่ระบบ</h1>
                <p className="text-center text-purple-300 text-lg mt-2">กรุณากรอกข้อมูลของคุณ</p>
            </div>
            <div className="flex justify-center flex-1 items-center">
                <form className="w-96 space-y-6 bg-purple-950 bg-opacity-70 p-8 rounded-xl border border-purple-500 border-opacity-50 shadow-2xl backdrop-blur-md">
                    <div>
                        <h2 className="text-purple-100 font-semibold mb-2">กรุณาระบุ E-Mail</h2>
                        <input type="text" placeholder="your@email.com" className="input input-bordered w-full bg-purple-900 bg-opacity-40 border-purple-400 text-purple-100 placeholder-purple-400" />
                    </div>
                    <div>
                        <h2 className="text-purple-100 font-semibold mb-2">กรุณาระบุ Password</h2>
                        <input type="password" placeholder="••••••••" className="input input-bordered w-full bg-purple-900 bg-opacity-40 border-purple-400 text-purple-100 placeholder-purple-400" />
                    </div>
                    <button className="btn w-full bg-gradient-to-r from-purple-600 to-purple-700 border-0 hover:from-purple-500 hover:to-purple-600 text-white font-bold text-lg">ลงทะเบียน</button>
                </form>
            </div>
        </div>
    );
}

export default FormPag;