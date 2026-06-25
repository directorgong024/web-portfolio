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

// 숫자 팝업
const popupTarget = document.querySelector(".pop-up-target");

const popupObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            popupTarget.classList.add("is-active");
        }
    });
}, {
    threshold: 0.5
});

document.addEventListener("DOMContentLoaded", () => {
    const popupTarget = document.querySelector(".pop-up-target");

    if (!popupTarget) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 애니메이션 다시 실행
                popupTarget.classList.remove("is-active");
                void popupTarget.offsetWidth; // 리플로우 강제
                popupTarget.classList.add("is-active");
            } else {
                // 화면에서 벗어나면 클래스 제거
                popupTarget.classList.remove("is-active");
            }
        });
    }, {
        threshold: 0.4
    });

    observer.observe(popupTarget);
});