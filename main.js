// appeler l'heure locale :
clock();


// fonction pour afficher l'heure actuelle :
function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30; // 360 / 12 = 30

    // les logs :
    console.log(date)
    console.log(hours);
    console.log(minutes)
    console.log(seconds)
    console.log(hour);
}

// degrès :
function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}


setInterval(clock, 1000)