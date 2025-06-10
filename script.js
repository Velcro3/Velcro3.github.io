const ytBox = document.getElementById("yt")
const ghBox = document.getElementById("gh")
function openYT() {
ytBox.classList = "vertical promptOpen"
}
function gotoYt() {
    location.href = "https://youtube.com/@viewer_the_twelth"
}
function cancelYt() {
    ytBox.classList = "vertical prompt"
}
function openGH() {
    ghBox.classList = "vertical promptOpen"
}
function gotoGh() {
    location.href = "https://github.com/Velcro3"
}
function cancelGh() {
    ghBox.classList = "vertical prompt"
}