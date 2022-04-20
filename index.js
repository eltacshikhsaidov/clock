// let p1 = document.querySelector('.first>p');
// let p2 = document.querySelector('.second>p');
// let p3 = document.querySelector('.third>p');

// let firstSection = document.querySelector('.first>.row');
// let secondSection = document.querySelector('.second>.row');
// let thirdSection = document.querySelector('.third>.row');

// firstSection.addEventListener('click', function () {
//     p1.classList.toggle('passive');
// });

// secondSection.addEventListener('click', function () {
//     p2.classList.toggle('passive');

// });

// thirdSection.addEventListener('click', function () {
//     p3.classList.toggle('passive');
// });



function string(name) {
    return document.querySelector(name);
}

let i = 0;

setInterval(() => {
    string('.sec').style.transform = `rotate(${i * 6}deg)`;
    string('.min').style.transform = `rotate(${i / 10}deg)`;
    string('.hour').style.transform = `rotate(${i / 120}deg)`;
    i ++;

}, 100);