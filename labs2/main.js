// notatnik z zajęć

const main = document.querySelector('main')

// jednorazowe wykonanie kodu po określonym czasie
const timeoutRef = setTimeout(
    () => {
        main.innerHTML = 'Msg from setTimeout'
    },
    2000
)

// wykonywanie kodu co określony czas
let licznik = 0
const intervalRef = setInterval(
    () => {
        main.innerHTML = `Msg from setInterval: ${licznik++}`
    },
    1000
)

//mozna zrobic tak ze zaleznie o value przesuwa o x pikseli do kazdego zdjecia animacji

let slides = document.querySelector('.slides');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');

button1.addEventListener('click', () => {
    slides.style.animation = 'none';
    slides.offsetHeight; /* trigger reflow */
    slides.style.animation = null; 
    slides.style.animationPlayState = "paused";
});

button2.addEventListener('click', () => {
    slides.style.animation = 'none';
    slides.offsetHeight; /* trigger reflow */
    slides.style.animation = null; 
    delay(1);
    

    slides.style.animationPlayState = "paused";
});

// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame