function Hompage() {
  return (
    <div>
      <div className="text-center mt-5 p-3">
        <h1 className="text-4xl">ยินดีต้อนรับสู่แอปของฉัน</h1>
        <p className="text-lg mt-2">นี่คือ Next.js ที่เขียนเพื่อการเรียน</p>
      </div>
      <div>
        <h1 className="text-center mt-6"></h1>
        </div>
        <div className="text-center">
        <a href="/light">บทเรียนที่ 1 State ของการเปิด / ปิด</a>
        <br></br>
        <a href="/count">บทเรียนที่2 State ของการเพิ่มลดตัวเลข</a>
        <br></br>
        <a href="/form">บทเรียนที่3 Show/Hide message</a>
        <br></br>
        <a href="/jikan">บทเรียนที่4 Jikan API</a>
        <br></br>
        <a href="/gamePlay">บทเรียนที่5 Game API</a>
        <br></br>
        <a href="/newspaper">บทเรียนที่6 newpaper</a>
        </div>  
      </div>
  );
}

export default Hompage;