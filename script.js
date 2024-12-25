let currentIndex = 0;
const frames = document.querySelectorAll('.carousel-frame');
const navLinks = document.querySelectorAll('.tab-link');
const dots = document.querySelectorAll('.dot');

// Initialize active tab and frame
function navigate(index) {
    currentIndex = index;
    updateActiveFrame();
    updateActiveTab();
    updateActiveDot();
}

function updateActiveFrame() {
    frames.forEach((frame, idx) => {
        frame.classList.remove('active');
        if (idx === currentIndex) {
            frame.classList.add('active');
        }
    });
}

function updateActiveTab() {
    navLinks.forEach((link, idx) => {
        link.classList.remove('active');
        if (idx === currentIndex) {
            link.classList.add('active');
        }
    });
}

function updateActiveDot() {
    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
        if (idx === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + frames.length) % frames.length;
    navigate(currentIndex);
}

// Initialize
navigate(currentIndex);
