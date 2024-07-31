const justTheWayYouAre = document.getElementById('justTheWayYouAre');
const keepItTogether = document.getElementById('keepItTogether');

justTheWayYouAre.addEventListener('ended', () => {
  keepItTogether.play();
});

keepItTogether.addEventListener('ended', () => {
  justTheWayYouAre.play();
});