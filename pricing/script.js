const nav = document.querySelector('.navigable');
const rond = document.querySelector('.rond');

const prix = document.querySelectorAll('.prix-forfait');


nav.addEventListener('click', function(e) {
    console.log(e.screenX);
    if(e.x > 536) {
        rond.classList.add('droite');
        prix[0].innerHTML = "$192.00";
        prix[1].innerHTML = "$390.00";
        prix[2].innerHTML = "$990.00";
    }
    else if(e.x <= 536) {
        rond.classList.remove('droite');
        prix[0].innerHTML = "$19.00";
        prix[1].innerHTML = "$39.00";
        prix[2].innerHTML = "$99.00";
    }
});