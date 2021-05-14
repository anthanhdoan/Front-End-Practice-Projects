const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    //add 'active' class to circle
    circles.forEach((circle, index) => {
        if (index < currentActive) {circle.classList.add('active')}
        else {circle.classList.remove('active')}
    })

    //make buttons (in)active depending on active states
    if (currentActive === circles.length) {next.disabled = true} 
    else if (currentActive === 1) {prev.disabled = true} 
    else {
        next.disabled = false
        prev.disabled = false
    }

    //make progress bar move 
    progress.style.width = ((currentActive - 1) / (circles.length - 1) * 100) + '%'
}