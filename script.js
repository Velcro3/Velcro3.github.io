const ytBox = document.getElementById("yt")
const ghBox = document.getElementById("gh")
const creditsModal = document.getElementById("credits");
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
function openCreditsModal() {
    creditsModal.classList = "vertical promptOpen"
}
function closeCreditsModal() {
    creditsModal.classList = "vertical prompt"
}