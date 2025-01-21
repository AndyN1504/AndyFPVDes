const heroBackground = document.querySelector('.hero-background-wrapper');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;

  // Calculate percentage positions
  const xPercent = (clientX / innerWidth) - 0.5;
  const yPercent = (clientY / innerHeight) - 0.5;

  // Update background position
  heroBackground.style.transform = `translate(${xPercent * 20}px, ${yPercent * 20}px)`;
  heroBackground.style.transition = 'transform 0.1s ease-out';
});
