let popupReserve = document.querySelector('.b-popup')
let btnReserve = document.querySelector('.about-reserve__btn-reserve')
let form = document.querySelector('.b-popup__form')

function openPopup() {
    popupReserve.classList.add('b-popup-active')
    popupReserve.classList.remove('b-popup-close')
}

function closePopup(evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        popupReserve.classList.remove('b-popup-active')
        popupReserve.classList.add('b-popup-close')
    }
}

btnReserve.addEventListener('click', (event) => {
    event.preventDefault()
    openPopup()
})
document.addEventListener('keydown', closePopup);

