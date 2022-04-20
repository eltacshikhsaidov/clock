function string(name) {
    return document.querySelector(name);
}

let i = 0;

setInterval(() => {
    string('.sec').style.transform = `rotate(${i * 6}deg)`;
    string('.min').style.transform = `rotate(${i / 10}deg)`;
    string('.hour').style.transform = `rotate(${i / 120}deg)`;
    i ++;

}, 1000);
