/* ================================
   MOBILE NAV TOGGLE
================================ */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Support BOTH hero types
  const hero =
    document.querySelector(".hero-slider") ||
    document.querySelector(".design-ideas-hero");

  // If navbar not found, stop
  if (!navbar) return;

  // If no hero section on page → navbar always black
  if (!hero) {
    navbar.classList.add("solid");
    return;
  }

  function updateNavbar() {
    const triggerPoint = hero.offsetHeight - 80;

    if (window.scrollY > triggerPoint) {
      navbar.classList.add("solid");     // BLACK after hero
    } else {
      navbar.classList.remove("solid");  // TRANSPARENT on hero
    }
  }

  // Run immediately
  updateNavbar();

  // Run on scroll
  window.addEventListener("scroll", updateNavbar);
});

/* ================================
   HERO SLIDER (AUTO)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  let currentIndex = 0;
  const intervalTime = 5000; // 5 seconds

  setInterval(() => {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
  }, intervalTime);
});


/* ================================
   TESTIMONIAL SLIDE-IN ON SCROLL
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".test-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach(card => observer.observe(card));
});

// SELECT BUTTONS & CARDS
const filterButtons = document.querySelectorAll(".filter-tabs button");
const filterCards = document.querySelectorAll(".filter-card");

// CLICK EVENT
filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // REMOVE ACTIVE FROM ALL BUTTONS
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    // SHOW / HIDE IMAGES
    filterCards.forEach(card => {
      if (filterValue === "all" || card.classList.contains(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     FILTER FUNCTION
  ================================ */

  const filterButtons = document.querySelectorAll(".filter-tabs button");
  const filterCards = document.querySelectorAll(".filter-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      filterCards.forEach(card => {
        card.style.display =
          filter === "all" || card.classList.contains(filter)
            ? "block"
            : "none";
      });
    });
  });

  /* ===============================
     IMAGE LIGHTBOX
  ================================ */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  if (lightbox && lightboxImg && closeBtn) {
    document.querySelectorAll(".filter-card img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }
});

