//card visual
let cardNum = document.getElementById("cardNumber");
let cardUser = document.getElementById("cardUser");
let cardMonth = document.getElementById("cardMM");
let cardYear = document.getElementById("cardYY");
let cardCVC = document.getElementById("cardCvc");

//card inputs
let nameInput = document.getElementById("nameInput");
let numInput = document.getElementById("numberInput");
let mmInput = document.getElementById("monthInput");
let yyInput = document.getElementById("yearInput");
let cvcInput = document.getElementById("cvcInput");
let confrimBtn = document.getElementById("confrimButton");

let cardDiv = document.getElementById("cardInfo");

confrimBtn.addEventListener("click", () => {
  let nameValue = nameInput.value;
  let numValue = numInput.value;
  let mmValue = mmInput.value;
  let yyValue = yyInput.value;
  let cvcValue = cvcInput.value;

  let numArr = [numInput, mmInput, yyInput, cvcInput];
  let letters = /^[A-Za-z]+$/;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i].value.match(letters)) {
        numArr[i].classList.add("error-input")
        return;
    }
  }

  let finalCode;
  function convert(num) {
    finalCode = num.toString().replace(/\d{4}(?=.)/g, '$& ');
    return finalCode
  }
  convert(numValue)

  if (nameValue != "" && numValue != "" && mmValue != "" && yyValue != "" && cvcValue != "") {
    cardUser.innerHTML = nameValue;
    cardNum.innerHTML = finalCode;
    cardMonth.innerHTML = `${mmValue}/`;
    cardYear.innerHTML = yyValue;
    cardCVC.innerHTML = cvcValue;

    cardDiv.innerHTML = `
        <div class="completed-info d-flex flex-column align-items-center">
      <div class="completed-info-img">
        <img src="/images/icon-complete.svg" alt="complete icon">
      </div>

      <div class="completed-info-title mt-3">
        <p>Thank You!</p>
      </div>
      
      <div class="completed-info-ph mt-3">
        <p>We've added your card details</p>
      </div>
    </div>`;
  } 

 
});




