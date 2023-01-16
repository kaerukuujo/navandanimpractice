const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('.menu');
const imageSlider = document.querySelector('.imageSlider');
menuIcon.addEventListener('click', ()=> {
    showMenu();
});

let imageArray = [];
let currentIndex = 0;

let img1 = document.createElement('img');
img1.src = './img/images/pokemon1.png';
imageArray.push(img1);
let img2 = document.createElement('img');
img2.src = './img/images/pokemon2.png';
imageArray.push(img2)
let img3 = document.createElement('img');
img3.src = './img/images/pokemon3.png';
imageArray.push(img3)
let img4 = document.createElement('img');
img4.src = './img/images/pokemon4.png';
imageArray.push(img4)
let img5 = document.createElement('img');
img5.src = './img/images/pokemon5.png';
imageArray.push(img5)


function showMenu(){
   if(menu.id === 'invisible'){
    menu.id = '';
   } else {
    menu.id = 'invisible';
   }
};

function rotateImage(){
    if(currentIndex === 4){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
}

function animate(){
    const animationId = requestAnimationFrame(animate);

    imageSlider.appendChild(imageArray[currentIndex]);
    if(animationId % 700 === 0){
        imageSlider.innerHTML = '';
        rotateImage();
    }
    console.log(animationId);
}

animate();