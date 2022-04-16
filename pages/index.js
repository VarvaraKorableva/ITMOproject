const popups=document.querySelector(".card")
const newAbout=document.querySelector(".popup_type_about")
const openPopupButton=document.querySelector(".card__btn")
const closePopupModal=newAbout.querySelector(".popup__close")




function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", keyClose);
}

function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyClose);
}

function keyClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
openPopupButton.addEventListener("click",()=>
openPopup(newAbout))
closePopupModal.addEventListener("click",()=>{
  closePopup(newAbout)
})

