const cowgirl = document.querySelector('.cowgirl');
const cactus = document.querySelector('.cactus');
const clouds = document.querySelector('.clouds');

const jump = () => {
cowgirl.classList.add('jump');

setTimeout(() => {
cowgirl.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {

    const cactusPosition = cactus.offsetLeft;
    const cowgirlPosition = +window.getComputedStyle(cowgirl).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).bottom.replace('px', '');
console.log(cloudsPosition);

    if (cactusPosition <= 83 && cactusPosition > 0 && cowgirlPosition < 78){
        cactus.style.animation = 'none';
        cactus.style.left = `${cactusPosition}px`;

        cowgirl.style.animation = 'none';
        cowgirl.style.bottom = `${cowgirlPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;


        cowgirl.src = './img/dead (8).png';

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump)