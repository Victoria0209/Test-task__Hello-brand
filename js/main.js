import './hamberger.js';
import './ScrollTrigger.js';
import './swiper.js';
import './pop-up.js';

window.counter = function () {
    // this refers to the html element with the data-scroll-showCallback tag
    var span = this.querySelector('span');
    var current = parseInt(span.textContent);

    span.textContent = current + 1;
};

document.addEventListener('DOMContentLoaded', function () {
    ScrollTrigger.init();
});
