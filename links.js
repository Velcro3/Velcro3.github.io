let ytModal = document.getElementById("ytmodal")
let ghModal = document.getElementById("ghmodal")
function openHome() {
    window.location.href = "index.html"
}
function ytModalOpen() {
    ytModal.classList = "promptOpen"
}
function gotoYt() {
    window.location.href = "https://youtube.com/@viewer_the_twelth"
}
function cancelYt() {
    ytModal.classList = "prompt"
}
function ghModalOpen() {
    ghModal.classList = "promptOpen"
}
function gotoGh() {
    window.location.href = "https://github.com/Velcro3"
}
function cancelGh() {
    ghModal.classList = "prompt"
}