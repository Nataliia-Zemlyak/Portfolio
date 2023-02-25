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
        headerSection.style.backgroundColor = "#2c2f3f"
        
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

//validate form


function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

const form = document.querySelector('#form');
const nameUser = document.querySelector('#name');
const emailUser = document.querySelector('#email');
const messageUser = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // зупиняємо відправку форми
    const name = nameUser.value;
    const email = emailUser.value;
    const message = messageUser.value;

    if (name === '' || email === '' || message === '') {
        alert('Будь ласка, заповніть всі поля форми');
    }
        // // перевіряємо валідність емейлу
        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validateEmail(emailUser.value)) {
        alert('Будь ласка, введіть дійсну електронну адресу');
        event.preventDefault(); // зупиняємо відправку форми
    }

    if(name || email || message) {
        alert('good')
}
});




// let sendMessage = document.querySelector("#sendMessage"),
//     placeInfo = document.querySelector(".placeInfo")
    
// sendMessage.addEventListener("click", (e) => {
//     e.preventDefault()
//     validateForm()
// } ) 
       
// function validateForm() {
//     let inputs = document.forms["myForm"].getElementsByTagName("input");
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value == "") {
//             placeInfo.classList.add("placeInfoOpacity")
//             return false;
//         } 
//     }
//     // sendForm();
// }

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
//             alert('Повідомлення надіслано. Дякуємо!'); 
//           } else { 
//             alert('Виникла помилка під час відправки повідомлення.'); 
//           } 
//         } 
//       }; 
//       xhr.open('POST', 'index.php', true); 
//       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
//       let formData = `name=${nameInput.value}&email=${emailInput.value}&message=${messageInput.value}`; 
//       xhr.send(formData); 
//     });
// }

