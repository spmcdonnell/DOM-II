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

// Keydown
var allPara = document.querySelectorAll('p');

allPara.forEach(item => {
    item.style.fontSize = '16px';
});

window.addEventListener('keydown', function(e) {
    var currentParaFontSize = document.querySelector('p').style.fontSize;
    var noLetters = Number(currentParaFontSize.replace(/\D/g, ''));

    if (e.which === 83) {
        allPara.forEach(item => {
            item.style.fontSize = `${noLetters - 1}px`;
        });
    }

    if (e.which === 66) {
        allPara.forEach(item => {
            item.style.fontSize = `${noLetters + 1}px`;
        });
    }
});

// Copy
window.addEventListener('copy', function(e) {
    alert(e.target.textContent);
});

// Mouseenter

allPara.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = `rgb(${Math.round(Math.floor(Math.random() * (255 - 0 + 1)))}, ${Math.round(Math.floor(Math.random() * (255 - 0 + 1)))}, ${Math.round(Math.floor(Math.random() * (255 - 0 + 1)))})`;
    });
});

// Mouseleave
allPara.forEach(item => {
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = `transparent`;
    });
});

/* -----------------------------
Stop propagation and Stop nav items default behavior
----------------------------- */

document.querySelector('.nav-container').addEventListener('click', function(e) {
    alert('Not propagating');
});

document.querySelector('.logo-heading').addEventListener('click', function(e) {
    e.stopPropagation();
});

var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
});
