const currencyBtn = document.body.querySelector('.btn-currency')
currencyBtn.addEventListener('click', () => {
  const currencyChosen = document.body.querySelector('.currency')
  if (currencyChosen.textContent == " $49.99 USD"){
    currencyChosen.textContent = " $66,999.99 ARS"
  }
  else{
    currencyChosen.textContent = " $49.99 USD"
  }
});

const form = document.body.querySelector('.form-container')
const btnSubmit = document.body.querySelector('.btn-getIt')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formComplete = getFormComplete(e);
  console.log(formComplete);
});

function getFormComplete(e){
  return {
    fullName: e.target.elements.fullName,
    birthDate: e.target.elements.birthDate,
    email: e.target.elements.email,
    phone: e.target.elements.phone,
    adress: e.target.elements.adress,
    payMethod: e.target.elements.payMethod,
    tands: e.target.elements.tands
    };
}