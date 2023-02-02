const popupReserve = document.querySelector('.b-popup')
const errorPopup = document.querySelector('.error-popup')
const btnReserve = document.querySelector('.about-reserve__btn-reserve')
const btnClosePopup = document.querySelector('.b-popup__btn-close')
const btnError = document.querySelector('.error-popup__btn')
const form = document.querySelector('.b-popup__form')
const guestName = document.querySelector('.b-popup__name')
const guestEmail = document.querySelector('.b-popup__email')

function openPopup() {
    popupReserve.classList.add('b-popup-active');
    popupReserve.classList.remove('b-popup-close');
}
btnReserve.addEventListener('click', (event) => {
    event.preventDefault();
    openPopup();
})


function closePopup() {
    popupReserve.classList.remove('b-popup-active');
    popupReserve.classList.add('b-popup-close');
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopup();
    }
}

btnClosePopup.addEventListener('click', (event) => {
    event.preventDefault();
    closePopup();
})

document.addEventListener('keydown', closePopupEsc);


function showMsgError() {
    errorPopup.classList.add('error-popup-active');
    errorPopup.addEventListener('click', () => {
        errorPopup.classList.remove('error-popup-active');
    })
}

async function createReserveTable(name, email) {
    try {
        const response = await fetch('https://api.jsonserver.io/data', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-Jsio-Token': 'b36f694c4458eabf9746671dd64c7407'
            },
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        });
        const data = response.json();
    } catch (e) {
        showMsgError();
    } finally {
        closePopup();
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createReserveTable(guestName.value, guestEmail.value);
})