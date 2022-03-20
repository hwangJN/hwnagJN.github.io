
const body = document.querySelector('body');

const createImg  = (number) => {
    const img = document.createElement('img');
    img.src = `img/${number}.jpg`;
    img.alt = 'background images';
    img.classList.add('bgImg');
    body.prepend(img);
}

const getRandom = () => {
    const IMG_NUM = 5;
    let num = Math.floor(Math.random() * IMG_NUM ) + 1;
    createImg(num);
}

getRandom();