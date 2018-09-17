const config = require(`./config.json`);
if(config.enableDevMode){
    require(`./index.html`);
    require(`./index.css`);
}
class SlideShow {
    constructor(){
        this.imageNumber = 2;
    }
    setImage( number ) {
        let moved = document.getElementsByClassName(`move-to-center`);
        moved[0].classList.add(`move-to-out`);
        moved[0].style.WebkitAnimationDuration = `${config.slideTime/2.5}ms`;
        moved[0].style.animationDuration = `${config.slideTime/2.5}ms`;
        moved[0].classList.remove(`move-to-center`);

        let imageElement = document.getElementsByClassName(`image-${number}`);
        imageElement[0].classList.add(`move-to-center`);
        imageElement[0].style.WebkitAnimationDuration = `${config.slideTime}ms`;
        imageElement[0].style.animationDuration = `${config.slideTime}ms`;
        imageElement[0].classList.remove(`move-to-out`);
    }
    interval() {
        setInterval( () => {
            this.setImage(this.imageNumber);
            let slideImagesElement = document.getElementsByClassName(`slide-image`);
            let slideImagesArrayLength = slideImagesElement.length;
            this.imageNumber++;
            if(this.imageNumber > slideImagesArrayLength)
                this.imageNumber = 1;
        }, config.slideTime );
    }
    addEventListners() {
        let buttonElement = document.getElementsByClassName(`slide-button`);
        buttonElementArray = Array.from(buttonElement);
        buttonElementArray.map( (element) => {
            element.addEventListener(`click`, () => {
                this.imageNumber = parseInt(element.innerHTML, 10);
                this.setImage(this.imageNumber);
            });
        })
    }
}

let slideShowInstance = new SlideShow();
slideShowInstance.interval();
slideShowInstance.addEventListners();