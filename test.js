const toggle = document.getElementById('dropdownToggle');
const subMenu = document.getElementById('subMenu');
const readMoreText = document.querySelector('.read-more-text');
const readMoreBtn = document.getElementById('more-Btn');
readMoreBtn.textContent = '...Read more'
const moreBio = document.querySelector('.more-bio');
const moreBioBtn = document.getElementById('more-bio-btn');
moreBioBtn.textContent = '...Read More';

toggle.addEventListener('click', function (e) {
    e.preventDefault();
    subMenu.classList.toggle('show-sub-menu');
});


readMoreBtn.addEventListener('click', () => {
    readMoreText.classList.toggle('display-text');
    if(readMoreText.classList.contains('display-text')) {
    readMoreBtn.textContent = '...Read less';
    } else {
        readMoreBtn.textContent = '...Read more';
    }
} )


moreBioBtn.addEventListener('click', () => {
    moreBio.classList.toggle('display-text');
    if(moreBio.classList.contains('display-text')) {
    moreBioBtn.textContent = '...Read less';
    } else {
        moreBioBtn.textContent = '...Read more';
    }
});