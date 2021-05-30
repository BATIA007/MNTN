document.querySelector('.header__search').onclick = function() {
    document.querySelector('#inputSearch').classList.toggle('header__input-active');
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('#searchContainer') && !event.target.closest("#searchIcon")) {
        inputSearch.value = "";
        document.querySelector('.header__search-list').classList.remove('header__search-list-active');
    }
})

document.querySelector('#inputSearch').onfocus = function() {
    document.querySelector('.header__search-list').classList.add('header__search-list-active');
}

document.querySelector('#inputSearch').onblur = function() {
    setTimeout(function() {
        inputSearch.value = "";
        document.querySelector('.header__search-list').classList.remove('header__search-list-active');
    }, 500)
}


document.querySelector('.footer__button').onclick = function(event) {
    if (this.previousSibling.value != '') {
        event.preventDefault();
        let modal = document.querySelector('.footer__modal');
        modal.style.top = 0 + 'px';
        setTimeout(() => modal.style.top = -60 + 'px', 4000)
    }
}

let input = document.querySelector('.header__input');
input.addEventListener('input', function() {
    let value = input.value.toLowerCase().trim();
    let list = document.querySelectorAll('.header__search-list .header__name');

    if (value != '') {
        for (let i = 0; i < list.length; i++) {
            if (list[i].innerText.toLowerCase().search(value) == -1) {
                list[i].parentElement.style.opacity = "0";
                setTimeout(() =>list[i].parentElement.style.display = "none", 200);
            }
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            list[i].parentElement.style.opacity = "1";
            setTimeout(() =>list[i].parentElement.style.display = "", 200);
        }
    }
});


const modalImage = document.querySelector('.modal__image');
const images = document.querySelectorAll('.image-active');

for (let image of images) {
    image.onclick = async function() {
        await modalImage.classList.remove('modal__close-active');
        modalImage.style.display = "flex";
        document.body.style.overflowY = "hidden";
    }
}

document.querySelector('.modal__close').onclick = function() {
    closeModalProduct();
}

document.addEventListener('keydown', function(event) {
    if (event.code == "Escape" && document.body.style.overflowY == 'hidden') {
        closeModalProduct();
    }
})

function closeModalProduct() {
    modalImage.classList.add('modal__close-active');
    setTimeout(() => modalImage.style.display = "none", 300);
    document.body.style.overflowY = "";
}


const modalForm = document.querySelector('.modal__register');
const modalLogin = document.querySelector('.modal__login');

document.querySelector('.modal__sign-up').onclick = function() {
    showModal(modalForm);
}

document.querySelector('.modal__sign-in').onclick = function() {
    showModal(modalLogin);
}

document.addEventListener('click', function(event) {
    if (event.target == modalForm) closeMoodal(modalForm);
    if (event.target == modalLogin) closeMoodal(modalLogin);
    for (let item of document.querySelectorAll('.header__item')) {
        if (event.target.closest('a') == item) {
            mobileList.classList.toggle('header__list-active');
            mobileBurger.classList.toggle('header__mobile-active');
        }
    }
})

function showModal(modalForm) {
    modalForm.style.animation = "modalOpacity 0.4s forwards";
    modalForm.style.display = "flex";
    document.body.style.overflowY = "hidden";
}

function closeMoodal(modalForm) {
    modalForm.style.animation = "modalClose 0.3s forwards";
    setTimeout(() => modalForm.style.display = "none", 300);
    document.body.style.overflowY = "";
    for (let input of modalForm.querySelectorAll('input')) {
        if (input.getAttribute('type') == 'submit') continue;
        input.value = "";
    }
}

const mobileBurger = document.querySelector('.header__mobile');
const mobileList = document.querySelector('.header__list');

mobileBurger.onclick = function() {
    this.classList.toggle('header__mobile-active');
    mobileList.classList.toggle('header__list-active')
}