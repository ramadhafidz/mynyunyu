const justTheWayYouAre = document.getElementById('justTheWayYouAre');
const keepItTogether = document.getElementById('keepItTogether');

function start () {
  let splash = document.getElementById("splash");

  splash.addEventListener("transitionend", () => {
    justTheWayYouAre.play();
    splash.remove();
  });

  justTheWayYouAre.addEventListener('ended', () => {
    keepItTogether.play();
  });

  keepItTogether.addEventListener('ended', () => {
    justTheWayYouAre.play();
  });

  splash.classList.add("hide");
}