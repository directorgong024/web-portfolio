// AOS 초기화 AOS 라이브러리를 실행시키는 명령어입니다.
AOS.init({
    duration: 1000, 
    once: false 
});

// 커스텀 커서
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 메뉴에 마우스를 올리면 커서 확대
const menuItems = document.querySelectorAll(".menu a , .contact_btn, .contact_button");
menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});