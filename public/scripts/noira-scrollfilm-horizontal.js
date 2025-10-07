function initNoiraScrollFilm(retryCount = 0) {
  const images = window.noiraScrollfilmImages || [];
  if (!images.length) {
    console.log(`🕒 Waiting for image URLs... (${retryCount})`);
    setTimeout(() => initNoiraScrollFilm(retryCount + 1), 500);
    return;
  }

  const mountPoint = document.getElementById("scroll-film");
  if (!mountPoint) {
    console.warn("⚠️ #scroll-film not found, retrying...");
    setTimeout(() => initNoiraScrollFilm(retryCount + 1), 500);
    return;
  }

  if (!window.gsap || !window.ScrollTrigger) {
    console.log("🕒 Waiting for GSAP...");
    setTimeout(() => initNoiraScrollFilm(retryCount + 1), 500);
    return;
  }

  console.log("✅ Initializing ScrollFilm with images:", images);

  const style = document.createElement("style");
  style.textContent = `
    body { margin: 0; overflow-x: hidden; }
    #scroll-film { width: 100%; height: 100vh; background: #111; }
    .horizontal {
      display: flex;
      height: 100vh;
      border: 3px solid lime;
    }
    .slide {
      flex: 0 0 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      color: #fff;
      border-right: 3px solid cyan;
      background: gray;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement("section");
  container.className = "horizontal";

  images.forEach((url, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.background = `hsl(${i * 120}, 70%, 40%)`;
    slide.textContent = `Slide ${i + 1}`;
    container.appendChild(slide);
  });

  mountPoint.innerHTML = "";
  mountPoint.appendChild(container);

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  const totalWidth = container.scrollWidth - window.innerWidth;
  console.log("📏 totalWidth:", totalWidth);

  gsap.to(container, {
    x: -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: true, // ✅ デバッグマーカー追加！
    },
  });

  console.log("🎉 ScrollFilm initialized successfully!");
}

window.addEventListener("load", () => {
  console.log("🌍 window loaded → start initNoiraScrollFilm()");
  setTimeout(() => initNoiraScrollFilm(0), 1000);
});

