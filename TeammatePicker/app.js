let members = ["Arti", "Hugo", "Gerard", "Dick", "Sven", "Ronald", "Ruud", "Kakpo"]

//Function to generate a random index from 0 to members.length -1)
const rng = (num) => {
    return Math.floor(Math.random() * num)
}

//Function to use the random number generator to have a minimum of 0 and a maximum of amount of teammembers-1 (index)
const pickRandom = () => {
    return rng(members.length)
}

//Function to append the randomly selected name to class 'selectedMember'
const showPicked = () => {
    const displayMember = document.querySelector('.selectedMember');
    return displayMember.innerHTML = `${members[pickRandom()]}!`
}

//Make the button call showPicked
const pickerBtn = document.querySelector('#pickerBtn');
pickerBtn.addEventListener('click', () => { showPicked() })