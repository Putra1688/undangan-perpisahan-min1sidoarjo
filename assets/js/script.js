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
