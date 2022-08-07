'use strict';

/* Logic:
    - if one button is pressed, show the modal
    - if modal is displayed we can close it by:
        - click close button
        - click on the overlay of the modal
        - pressing "ESC" key
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
    if(event.code === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});