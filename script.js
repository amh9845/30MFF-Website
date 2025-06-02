// ===== Scroll-based fade-in for each section =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in'); // fade out again when leaving
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('fade-target');
  observer.observe(section);
});

// ===== Simple Carousel for Behind the Scenes =====
const carousel = document.querySelector('.carousel');
const images = carousel?.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Show the first image on page load
if (images.length > 0) {
  showImage(0);
}

// ===== Hover Reveal for Cast & Credits =====
const creditItems = document.querySelectorAll('.credit-hover');

creditItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('active');
  });
  item.addEventListener('mouseout', () => {
    item.classList.remove('active');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const creditItems = document.querySelectorAll('.credit-hover');
  creditItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('active');
    });
    item.addEventListener('mouseout', () => {
      item.classList.remove('active');
    });
  });
});