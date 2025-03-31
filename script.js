// หน้าแรกและหน้าคำอวยพร
const homePage = document.getElementById('home-page');
const letterPage = document.getElementById('letter-page');
const backgroundMusic = document.getElementById('background-music');

// เพิ่ม Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#E6E6FA' }, // อนุภาคสีม่วงอ่อน
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100, duration: 0.4 },
                 push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// ไปยังหน้าคำอวยพร
function goToLetterPage() {
    homePage.classList.remove('active');
    homePage.classList.add('hidden');
    letterPage.classList.add('active');
    // เล่นเพลงอัตโนมัติ
    backgroundMusic.play();
}

// กลับไปหน้าแรก
function goToHomePage() {
    letterPage.classList.remove('active');
    letterPage.classList.add('hidden');
    homePage.classList.add('active');
    // หยุดเพลง
    backgroundMusic.pause();
}

// เพิ่ม div สำหรับ particles
document.body.insertAdjacentHTML('afterbegin', '<div id="particles-js"></div>');