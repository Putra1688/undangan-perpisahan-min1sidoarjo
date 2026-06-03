// Inisialisasi AOS (Animasi)
AOS.init({
    once: true,
    offset: 50,
});

const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = musicToggle.querySelector('i');
let isPlaying = false;

function bukaUndangan() {
    // Confetti Effect!
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#BAE6FD', '#FEF08A', '#A7F3D0', '#FBCFE8', '#FED7AA']
    });

    // Animasi Cover menghilang ke atas
    const cover = document.getElementById('cover');
    cover.style.transform = 'translateY(-100vh)';
    
    // Tampilkan Konten Utama
    const konten = document.getElementById('konten-utama');
    konten.classList.remove('hidden');
    
    // Allow layout repaint
    setTimeout(() => {
        konten.classList.remove('opacity-0');
        document.getElementById('body').classList.remove('overflow-hidden');
        AOS.refresh();
    }, 50);

    // Tampilkan tombol musik
    musicToggle.classList.remove('hidden');

    // Play music
    bgMusic.play().then(() => {
        isPlaying = true;
        musicIcon.classList.remove('fa-music');
        musicIcon.classList.add('fa-pause');
    }).catch(e => console.log("Autoplay dicegah oleh browser."));
}

// Toggle Music
musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    } else {
        bgMusic.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
    
    // Little bounce effect when clicked
    musicIcon.classList.remove('animate-bounce');
    void musicIcon.offsetWidth; // trigger reflow
    musicIcon.classList.add('animate-bounce');
});

// Countdown Logic
const countdownDate = new Date("June 13, 2026 08:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hariElement = document.getElementById("hari");
    const jamElement = document.getElementById("jam");
    const menitElement = document.getElementById("menit");
    const detikElement = document.getElementById("detik");

    if (!hariElement || !jamElement || !menitElement || !detikElement) return;

    if (distance < 0) {
        clearInterval(countdownInterval);
        hariElement.innerHTML = "00";
        jamElement.innerHTML = "00";
        menitElement.innerHTML = "00";
        detikElement.innerHTML = "00";
        return;
    }

    const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
    const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((distance % (1000 * 60)) / 1000);

    hariElement.innerHTML = hari < 10 ? "0" + hari : hari;
    jamElement.innerHTML = jam < 10 ? "0" + jam : jam;
    menitElement.innerHTML = menit < 10 ? "0" + menit : menit;
    detikElement.innerHTML = detik < 10 ? "0" + detik : detik;
}, 1000);
