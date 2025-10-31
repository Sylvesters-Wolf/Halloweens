// --- ไฟล์ script.js ---

/*
  เราใช้ DOMContentLoaded เพื่อให้แน่ใจว่า
  สคริปต์นี้จะเริ่มทำงานหลังจากที่หน้าเว็บ HTML โหลดเสร็จแล้วเท่านั้น
*/
document.addEventListener('DOMContentLoaded', function() {
            
    // ค้นหาองค์ประกอบต่างๆ ที่เราต้องใช้
    const button = document.getElementById('spookyButton');
    const message = document.getElementById('spookyMessage');
    const sound = document.getElementById('spookySound');

    // เมื่อปุ่มถูกคลิก
    button.addEventListener('click', function() {
        
        // ทำสิ่งที่ต้องการ
        button.textContent = 'คุณโดนหลอกแล้ว!';
        message.style.display = 'block';
        
        // เล่นเสียง
        sound.play();
    });

});