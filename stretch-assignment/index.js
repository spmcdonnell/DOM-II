var blocks = document.querySelectorAll('.blocks > div');

blocks.forEach(item => {
    item.style.transform = 'translateX(0px)';
});

var move;

function whileDown() {
    move = setInterval(() => {
        var currentTransform = this.style.transform;
        var noLettersTransform = Number(currentTransform.replace(/\D/g, ''));

        this.style.transform = `translateX(${noLettersTransform + 1}px)`;
    }, 10);
}

function whileUp() {
    clearInterval(move);
}

blocks.forEach(item => {
    item.addEventListener('mousedown', whileDown);
});

document.addEventListener('mouseup', whileUp);

// Move block to top functionality
var toTheTop = document.querySelectorAll('.to-the-top');

toTheTop.forEach(item => {
    item.parentNode.style.order = 0;
});

function reorder(e) {
    this.parentNode.style.order -= 1;
    e.stopPropagation();
}

toTheTop.forEach(item => {
    item.addEventListener('click', reorder);
});
