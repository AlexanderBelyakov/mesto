let editProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

editProfile.addEventListener('click', () => {popup.classList.add('popup_opened')});
let closePopup = document.querySelector('.popup__close-button');

closePopup.addEventListener('click', () => {popup.classList.remove('popup_opened')});

let formElement = popup;
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');


function formSubmitHandler (evt) {
  evt.preventDefault();
  let currentName = nameInput.value;
  let currentJob = jobInput.value;
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__profession');
  name.textContent = currentName;
  job.textContent = currentJob;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

