document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');

    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length;

    next.onclick = function() {
        active = (active + 1) % lengthItems;
        reloadSlider();
    };

    prev.onclick = function() {
        active = (active - 1 + lengthItems) % lengthItems;
        reloadSlider();
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            active = index;
            reloadSlider();
        });
    });

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.slider .dots li.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        }
        dots[active].classList.add('active');
    }

    // Optional: Auto-play the carousel
    setInterval(() => {
        next.click();
    }, 3000);
});
