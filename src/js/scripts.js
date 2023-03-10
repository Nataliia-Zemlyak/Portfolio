//humburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".navmenu");

hamburger.onclick = function () {
    menu.classList.toggle("active-burger");
}

const headerSection = document.querySelector('.header-section');
let lastScrollTop = 0;

function menuBackground() {
    let scolTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scolTop > lastScrollTop) {
        headerSection.classList.add("header-hidden");

    } else {
        headerSection.classList.remove("header-hidden");
        menu.classList.remove("active-burger");
    }

    lastScrollTop = scolTop <= 0 ? 0 : scolTop;


    if (window.pageYOffset > (window.innerHeight / 4)) {
        headerSection.style.backgroundColor = "#2c2f3f";

    } else {
        headerSection.style.backgroundColor = "transparent";
    }
}
window.addEventListener(`scroll`, menuBackground);

//scroll
const a = document.querySelectorAll('a[href^="#"]');
for (let title of a) {
    title.addEventListener('click', function (event) {
        event.preventDefault();
        let scroll = title.getAttribute('href');

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

//validate form


function isValidEmail(mail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(mail);
}

let form = document.querySelector('#form'),
    nameUser = document.querySelector('#name'),
    emailUser = document.querySelector('#email'),
    messageUser = document.querySelector('#message'),
    sentMessage = document.querySelector(".sent-message");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameUser.value;
    const email = emailUser.value;
    const message = messageUser.value;

    if (name === '' || email === '' || message === '') {
        nameUser.classList.add("placeholderColor");
        emailUser.classList.add("placeholderColor");
        messageUser.classList.add("placeholderColor");

    } else if (!isValidEmail(email)) {
        sentMessage.innerHTML = "The email address you entered is not valid.";
    } else {
        const xhr = new XMLHttpRequest(); 
        xhr.onreadystatechange = function () { 
          if (xhr.readyState === 4) { 
            if (xhr.status === 200) { 
              sentMessage.innerHTML = 'Your message has been sent';
            } else { 
              sentMessage.innerHTML = 'Sorry, there was an error, your message was not sent';
             
            } 
          } 
        }; 
        xhr.open('POST', 'index.php', true); 
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
        let formData = `name=${nameUser.value}&email=${emailUser.value}&message=${messageUser.value}`; 
        xhr.send(formData); 
    }
});


//send form
// function sendForm () {
//     const form = document.querySelector('#form'); 
//     const nameInput = document.querySelector('#name'); 
//     const emailInput = document.querySelector('#email'); 
//     const messageInput = document.querySelector('#message'); 

//     form.addEventListener('submit', function (event) { 
//       event.preventDefault(); // Зупиняємо стандартну поведінку форми 

//       const xhr = new XMLHttpRequest(); 
//       xhr.onreadystatechange = function () { 
//         if (xhr.readyState === 4) { 
//           if (xhr.status === 200) { 
//             // alert('Повідомлення надіслано. Дякуємо!'); 
//             sentMessage.innerHTML = 'Your message has been sent';

//           } else { 
//             sentMessage.innerHTML = 'Your message has not been sent';
//             // alert('Виникла помилка під час відправки повідомлення.'); 
//           } 
//         } 
//       }; 
//       xhr.open('POST', 'index.php', true); 
//       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
//       let formData = `name=${nameInput.value}&email=${emailInput.value}&message=${messageInput.value}`; 
//       xhr.send(formData); 
//     });
// }