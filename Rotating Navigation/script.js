const open = document.querySelector('#open')
const close = document.querySelector('#close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('shownav'))
close.addEventListener('click', () => container.classList.remove('shownav'))