
const roles = [

    'an Industrial Engineer',
    'a Systems and Computing Engineer',
    'passionate about Optimization',
    'a Problem Solver'
]

let currentRole = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;           // typing speed in ms
const pause = 1500;          // pause after finishing a word

const target = document.getElementById('typewriter');

function type (){

    const text = roles[currentRole];

    if (isDeleting){
        charIndex--;
        target.textContent = text.substring(0, charIndex);
    }
    else {
        charIndex++;
        target.textContent = text.substring(0, charIndex);
    }

    // Am I done writing?

    if (!isDeleting && charIndex === text.length){
        isDeleting = true;
        setTimeout(type, pause)

    }

    // Am I done deleting?
    else if (isDeleting && charIndex === 0){
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length; // Loop through roles
        setTimeout(type, 300);
    }

    else {
        setTimeout(type, isDeleting? 50 : speed);
    }

}

type();