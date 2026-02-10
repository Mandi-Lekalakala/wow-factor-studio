function pauseFunction(event) {
  event.preventDefault();
}

let stopFunction = document.querySelector("#home-link");
stopFunction.addEventListener("click", pauseFunction);

function revealImagesOnScroll() {
  let imageGrid = document.querySelector(".styled-images");
  let images = document.querySelectorAll(".styled-images img");

  if (imageGrid && images.length) {
    let imagesObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          images.forEach((img) => {
            img.classList.add("is-visible");
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.02 },
    );

    imagesObserver.observe(imageGrid);
  }
}

function revealLastSentenceOnScroll() {
  let lastSentence = document.querySelector(".last-sentence");

  if (lastSentence) {
    let lastObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    lastObserver.observe(lastSentence);
  }
}

revealImagesOnScroll();
revealLastSentenceOnScroll();
