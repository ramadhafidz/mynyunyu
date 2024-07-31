document.addEventListener('DOMContentLoaded', () => {
  const justTheWayYouAre = document.getElementById('justTheWayYouAre');
  const keepItTogether = document.getElementById('keepItTogether');

  justTheWayYouAre.play().catch((error) => {
    console.log('Autoplay was prevented. Click anywhere to play the audio.');
    document.body.addEventListener('click', () => {
      justTheWayYouAre.play();
    }, { once: true });
  });

  justTheWayYouAre.addEventListener('ended', () => {
    keepItTogether.play();
  });

  keepItTogether.addEventListener('ended', () => {
    justTheWayYouAre.play();
  });
});