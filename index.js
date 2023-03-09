let menu = document.getElementById('menu-sign');
let pages = document.getElementById('items');
pages.style.right = '-300px';
function clickMe() {
    if (pages.style.right == '-300px') {
        pages.style.right = '0px';
    }
    else {
        pages.style.right = '-300px';
    }
}
menu.addEventListener('click', clickMe);