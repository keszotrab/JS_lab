const slider = document.querySelector('.slider');
const sliderControlsContainer = document.querySelector('.slider-controls');
const sliderControls = ['previous', 'next'];
const slides = document.querySelectorAll('.slide');
let funnyInterval = setInterval(() => exampleCarousel.setCurrentState("a"), 7000);


class Carousel {

    constructor(container, items, controls){
        this.carouselControls = controls;
        this.carouselContainer = container;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(element => {
            element.classList.remove('slide-1');
            element.classList.remove('slide-2');
            element.classList.remove('slide-3');
            element.classList.remove('slide-4');
            element.classList.remove('slide-5');
        });

        this.carouselArray.slice(0, 5).forEach((element, i) => {
            element.classList.add(`slide-${i+1}`);
        });

    }

    //get put last element as first & put first element as last 
    setCurrentState(direction){
        if (direction.className == 'slider-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery(); 
        clearInterval(funnyInterval);
        let funnyInterval = setInterval(() => exampleCarousel.setCurrentState("a"), 7000);

    }

    setControls() {
        this.carouselControls.forEach(control => {
            sliderControlsContainer.appendChild(document.createElement('button')).className = `slider-controls-${control}`;
            document.querySelector(`.slider-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...sliderControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault(); //don't really understand
                this.setCurrentState(control);
            });
        });
    }

}

const exampleCarousel = new Carousel(sliderControlsContainer, slides, sliderControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
exampleCarousel.setCurrentState("a");
//setTimeout(() => exampleCarousel.setCurrentState("a"), 4000);

















// notatnik z zajęć
/*

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
    slides.offsetHeight; /* trigger reflow 
    slides.style.animation = null; 
    slides.style.animationPlayState = "paused";
});

button2.addEventListener('click', () => {
    slides.style.animation = 'none';
    slides.offsetHeight; /* trigger reflow 
    slides.style.animation = null; 
    delay(1);
    

    slides.style.animationPlayState = "paused";
});
*/
// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame