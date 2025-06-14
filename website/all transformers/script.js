
function showPage(pageId) {
    document.getElementById('main-menu').style.display = 'none';
    document.querySelectorAll('.transformer-page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function showMainMenu() {
    document.querySelectorAll('.transformer-page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('main-menu').style.display = 'block';
}
