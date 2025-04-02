// ตรวจสอบการคลิกบนเมนู
document.getElementById('Menu_Place').addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    // เปลี่ยนจาก dropdown เป็น dropup
    dropdown.classList.toggle('dropup');
  });