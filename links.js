let ytModal = document.getElementById("ytmodal")
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