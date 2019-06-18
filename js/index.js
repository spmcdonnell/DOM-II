// Your code goes here
var body = document.querySelector('body');

// Load Event
function fadeIn() {
    setTimeout(function() {
        document.querySelector('.main-container').classList.add('loaded');
    }, 0);
}

window.addEventListener('load', fadeIn);

// Scroll Event
var didScroll = false;
window.addEventListener('scroll', function() {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        document.querySelector('body').style.backgroundColor = `rgb(${Math.round(Math.floor(Math.random() * (255 - 0 + 1)))}, ${Math.round(Math.floor(Math.random() * (255 - 0 + 1)))}, ${Math.round(Math.floor(Math.random() * (255 - 0 + 1)))})`;
    }
    didScroll = false;
}, 200);

// Click Event
function rotate(e) {
    var target = e.target;

    if (target.tagName === 'IMG') {
        if (target.classList.contains('rotate')) {
            target.classList.remove('rotate');
        } else {
            target.classList.add('rotate');
        }
    }
}

window.addEventListener('click', rotate);

// Resize
window.addEventListener('resize', function() {
    if (window.innerWidth <= 500) {
        body.classList.add('small');
    } else if (window.innerWidth > 500) {
        body.classList.remove('small');
    }
});

// Double Click
window.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'H2') {
        if (e.target.style.color !== 'pink') {
            e.target.style.color = 'pink';
        } else {
            e.target.style.color = 'black';
        }
    }
});

// Mouseover
window.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('btn')) {
        if (!e.target.classList.contains('flip')) {
            e.target.classList.add('flip');
        } else {
            e.target.classList.remove('flip');
        }
    }
});
