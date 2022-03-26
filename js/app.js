window.onload = () => {
    const SPROUTED = document.getElementById(`make-spr-rice`);
    const WHITE = document.getElementById(`make-wht-rice`);
    const SPRBUTTON = document.getElementById(`sprouted-california-rice`);
    const WHTBUTTON = document.getElementById(`white-rice`);
    const INPUTBOX = document.getElementById(`quantity`);

    let sprCup = document.getElementById(`spr-cal-r-cups`);
    let sprCupsWater = document.getElementById(`c-water`);
    let whtCup = document.getElementById(`wht-r-cups`);
    let whtCupsWater = document.getElementById(`cups-water`);

    SPROUTED.style.display = `none`;
    WHITE.style.display = `none`;
    let cup = 0;

    let getVal = () => {
        cup = INPUTBOX.value;
        sprCup.textContent = cup;
        whtCup.textContent = cup;
        sprCupsWater.textContent = 1.6*cup;
        whtCupsWater.textContent = .5*cup;
    };

    getVal();

    let sproutButtonClick = () => {
        SPROUTED.style.display = `block`;
        WHITE.style.display = `none`;
        SPRBUTTON.style.background = `hsla(75, 38%, 47%, 1)`;
        WHTBUTTON.style.background = `hsla(75, 38%, 25%, 1)`;
    };
    SPRBUTTON.addEventListener(`click`, sproutButtonClick);

    let whiteButtonClick = () => {
        WHITE.style.display = `block`;
        SPROUTED.style.display = `none`;
        WHTBUTTON.style.background = `hsla(75, 38%, 47%, 1)`;
        SPRBUTTON.style.background = `hsla(75, 38%, 25%, 1)`;
    };
    WHTBUTTON.addEventListener(`click`, whiteButtonClick);

    INPUTBOX.addEventListener(`keyup`, getVal);
};
