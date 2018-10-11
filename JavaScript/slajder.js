function Slider(selector, pauseTime) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll('.slider-slide');

    this.btnPrev = this.slider.querySelector('.slider-prev');
    this.btnNext = this.slider.querySelector('.slider-next');
    this.current = 0; //numer aktualnego slajdu
    this.createButtons();

    if (typeof pauseTime !== 'number') {
        pauseTime = 3000;
    }

    this.pauseTime = pauseTime;

    console.log('dziala');

    this.time = setTimeout(function(){
        this.nextSlide();
    }.bind(this), 5000);

}

Slider.prototype.prevSlide = function() {
    for (let el of this.slides) {
        el.classList.remove('slider-slide-active');
    }
    this.current--;
    if (this.current < 0) {
        this.current = this.slides.length - 1;
    }
    this.slides[this.current].classList.add('slider-slide-active')

    clearTimeout(this.time);
    this.time = setTimeout(function() {
        this.nextSlide();
    }.bind(this), this.pauseTime);
};

Slider.prototype.nextSlide = function() {
    for (let el of this.slides) {
        el.classList.remove('slider-slide-active');
    }
    this.current++;
    if (this.current > this.slides.length - 1) {
        this.current = 0;
    }
    this.slides[this.current].classList.add('slider-slide-active')

    clearTimeout(this.time);
    this.time = setTimeout(function() {
        this.nextSlide();
    }.bind(this), this.pauseTime);
};

Slider.prototype.createButtons = function() {
    this.btnPrev = this.slider.querySelector('.slider-prev');
    this.btnNext = this.slider.querySelector('.slider-next');

    let self = this;

    this.btnPrev.addEventListener('click', function(){
        console.log('nastepny dziala');
        self.prevSlide();

    });

    this.btnNext.addEventListener('click', function(){
        console.log('poprzedni dziala');
        self.nextSlide();

    });
};

let s1 = new Slider("#slider1", 6000);
let s2 = new Slider('#slider2')