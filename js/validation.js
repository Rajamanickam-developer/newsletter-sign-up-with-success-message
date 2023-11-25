const form = document.querySelector('.input-container');
const newsletter = document.querySelector('.newsletter-container');
const popup = document.querySelector('.popup-container');
const input = document.querySelector('.email-input');
const errorEle = document.querySelector('.error-msg');
const getEmail = document.getElementById('get-email');
const popupBtn = document.querySelector('popup-btn');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  emailValidation();
})


function emailValidation(){
  
  let emailCheck = !input.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
  if (emailCheck) {
    errorEle.innerHTML = 'Valid email required';
    input.classList.add('error');
    return false;
  }else{
    newsletter.classList.add('hide');
    popup.classList.remove('hide');
    let val = input.value;
    getEmail.innerHTML = val;
  }
}


function dismissMsg(){
  newsletter.classList.remove('hide');
}