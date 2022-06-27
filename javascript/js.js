const nav = document.getElementById('nav');
const closeNavbar = document.getElementById('closeNavbar');
const showNavbar = document.getElementById('showNavbar');
const opacity = document.getElementById('opacity');

closeNavbar.onclick = function() {
    nav.style.display = 'none';
}
opacity.onclick = function() {
    nav.style.display = 'none';
}
showNavbar.onclick = function() {
    nav.style.display = 'flex'
}

function windowResized() {
    let name = document.getElementById('name')
    if (window.innerWidth <= 600) {
        name.textContent = 'ADONIS'
    } else {
        name.textContent = 'ADONIS Jr SUICO'
        name.style.fontSize = '60px'
    }
}

window.addEventListener('resize', windowResized);

// smooth
class Slider {
    constructor(options) {
        this.sections = document.querySelectorAll(options.section);
        this.navigation = document.querySelector(options.dots);

        this.navigation.addEventListener('click', this.scrollToSection.bind(this));
        window.addEventListener('scroll', this.setDotStatus.bind(this));
    }

    removeDotStyles() {
        const dots = this.navigation;
        const is_active = dots.querySelector('.is-active');

        if (is_active != null) {
            is_active.classList.remove('is-active');
        }
    }

    setDotStatus() {
        const scroll_position = window.scrollY;
        const dots = Array.from(this.navigation.children);

        this.sections.forEach((section, index) => {
            const half_window = window.innerHeight / 2;
            const section_top = section.offsetTop;

            if (scroll_position > section_top - half_window && scroll_position < section_top + half_window) {
                this.removeDotStyles();
                dots[index].classList.add('is-active');
            }
        })
    }

    scrollToSection(e) {
        const dots = Array.from(this.navigation.children);
        const window_height = window.innerHeight;

        dots.forEach((dot, index) => {
            if (dot == e.target) {

                window.scrollTo({
                    top: window_height * index,
                    behavior: 'smooth',
                });
            }
        });
    }
}

new Slider({
    section: '.section',
    dots: '#js-dots',
});