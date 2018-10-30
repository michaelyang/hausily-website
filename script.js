const nav = document.getElementById('main-nav');
const navButtons = nav.querySelectorAll('a');

function navButtonOnClick(e) {
    navButtons.forEach(navButton => navButton.classList.remove('active'));
    this.classList.add('active');
}

navButtons.forEach(navButton => navButton.addEventListener('click', navButtonOnClick));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});