const btnAspiranture = document.querySelector('.education__button_type_aspiranture');
const btnMagistarture = document.querySelector('.education__button_type_magistrature');
const containerAspiranture = document.querySelector('.education__container_type_aspiranture');
const containerMagistrature = document.querySelector('.education__container_type_magistrature');

btnAspiranture.addEventListener('click', () =>{
  btnAspiranture.classList.add('education__button_active');
  containerMagistrature.classList.add('education__container_visible');
  btnMagistarture.classList.remove('education__button_active');
  containerAspiranture.classList.remove('education__container_visible');
})

btnMagistarture.addEventListener('click', () =>{
  btnMagistarture.classList.add('education__button_active');
  containerAspiranture.classList.add('education__container_visible');
  btnAspiranture.classList.remove('education__button_active');
  containerMagistrature.classList.remove('education__container_visible');
})