//humburger
let hamburger = document.querySelector(".hamburger")
let menu = document.querySelector(".navmenu")

hamburger.onclick = function () {
    menu.classList.toggle("active-burger")
}

const headerSection = document.querySelector('.header-section')
let lastScrollTop = 0
function menuBackground() {
    let scolTop = window.pageYOffset || document.documentElement.scrollTop
    if (scolTop > lastScrollTop) {
        headerSection.classList.add("header-hidden")
        
    } else {
        headerSection.classList.remove("header-hidden")
        menu.classList.remove("active-burger")
    }
     
    lastScrollTop = scolTop <= 0 ? 0 : scolTop
    

    if (window.pageYOffset > (window.innerHeight / 4)) {
        headerSection.style.backgroundColor = "#85586F"
    } else {
        headerSection.style.backgroundColor = "transparent"
    }
}
window.addEventListener(`scroll`, menuBackground)

//scroll
const a = document.querySelectorAll('a[href^="#"]')
for (let title of a) {
    title.addEventListener('click', function (event) {
        event.preventDefault()
        let scroll = title.getAttribute('href')

        document.querySelector(scroll).scrollIntoView({
            behavior: 'smooth'
            
        })
    })
}

// scroll to top

window.addEventListener('scroll', function () {
    let btnTop = document.getElementById('scrolTop');

    if (window.pageYOffset > 600) {
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
    }
});

document.getElementById('scrolTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});