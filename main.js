const config = require(`./config.json`);
if(config.enableDevMode){
    require(`./index.html`);
    require(`./index.css`);
}
class SlideShow {
    constructor(){
        this.imageNumber = 1;
        this.timer = null;
        this.interval();
        this.addEventListners();
    }
    setImage() {
        let moved = document.getElementsByClassName(`move-to-center`);
        moved[0].classList.add(`move-to-out`);
        moved[0].style.WebkitAnimationDuration = `${config.slideTime/2.5}ms`;
        moved[0].style.animationDuration = `${config.slideTime/2.5}ms`;
        moved[0].classList.remove(`move-to-center`);

        let imageElement = document.getElementsByClassName(`image-${this.imageNumber}`);
        imageElement[0].classList.add(`move-to-center`);
        imageElement[0].style.WebkitAnimationDuration = `${config.slideTime}ms`;
        imageElement[0].style.animationDuration = `${config.slideTime}ms`;
        imageElement[0].classList.remove(`move-to-out`);
    }
    interval() {
        this.timer = setInterval( () => {
            this.imageNumber += 1;
            this.adjustImageCount();
            this.setImage();
        }, config.slideTime );
    }
    addEventListners() {
        let buttonElement = document.getElementsByClassName(`slide-button`);
        buttonElementArray = Array.from(buttonElement);
        buttonElementArray.map( (element) => {
            element.addEventListener(`click`, () => {
                clearInterval(this.timer);
                if(element.value == "inc")
                    this.imageNumber += 1;
                else
                    this.imageNumber -= 1;
                this.adjustImageCount();
                this.setImage();
                this.interval();
            });
        })
    }
    adjustImageCount() {
        let slideImagesElement = document.getElementsByClassName(`slide-image`);
        if( this.imageNumber > slideImagesElement.length )
            this.imageNumber = 1;
        else if ( this.imageNumber < 1 )
            this.imageNumber = 4;
    }
}

new SlideShow();