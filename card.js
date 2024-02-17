

const cardholderInput = document.getElementById("cardholder");
const copyNumberInput = document.getElementById("copy");
const copyNameInput = document.getElementById("copyname");
const cardholderName=document.getElementById('cardholdername');
const expiryMonth=document.getElementById('dd');
const expiryYear=document.getElementById('yy');
const cardCvc=document.getElementById('cvc');
const copydate=document.getElementById('copydate');
const cvc1=document.getElementById('cvc1');

cardholderName.addEventListener("input", function() {
    
    this.value = this.value.toUpperCase();
});




//FOR INUTTING NAME INTO THE CARD
cardholderName.addEventListener('input',function(){
    const namevalue=cardholderName.value;
    copyNameInput.value=namevalue.toUpperCase();
});





//FOR THE DEBITG CARD NUMBER
function formatCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\D/g, '');

    let formattedNumber = '';
    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += ' ';
        }
        formattedNumber += cardNumber[i];
    }
    return formattedNumber;
}

cardholderInput.addEventListener('input', function() {
    if(!/^\d*$/.test(cardholderInput.value)){
        error1.textContent='Wrong format! Numbers only'
    }
    else{
    error1.textContent='';
    }
    if(cardholderInput.value==''){
        error1.textContent='';
    }
    const cardNumber = cardholderInput.value;
    const formattedNumber = formatCardNumber(cardNumber);
    copyNumberInput.value = formattedNumber;

    copyNameInput.value = document.getElementById("cardholdername").value;
    
});







//FOR EXPIRY DATE INPUT

let visited=false;
function updateDate(){
    visited=true;
    if(expiryMonth.value<13){
    const expmonth=expiryMonth.value;
    
    const  expyear=expiryYear.value;
    copydate.value=expmonth+"/"+expyear;
    
    }
    else{
        error2.textContent='invalid month';
    }
    
   
}

expiryMonth.addEventListener('input', updateDate);

expiryYear.addEventListener('input',updateDate);









//FOR CARD CVC
cardCvc.addEventListener('blur',()=>{
    const cvcvalue=cardCvc.value;
    cvc1.value=cvcvalue;
});

let error1=document.getElementById('error_num');
let error2=document.getElementById('error_date');
let error3=document.getElementById('error_cvc');


function checkExpiry() {
    
    if (!expiryMonth.value.trim() || !expiryYear.value.trim()) {
        visited = true; 
        console.log('Visited:', visited);
        error2.textContent = "Can't be blank";
    } else {
        console.log('Visited:', visited);
        error2.textContent = '';
    }
}


expiryMonth.addEventListener('blur', checkExpiry);
expiryYear.addEventListener('blur', checkExpiry);

cardCvc.addEventListener('blur',function(){
    if(!visited){
        error3.textContent="Cant't be blank"
    }
    else{
        error3.textContent=''
    }
});





document.addEventListener('DOMContentLoaded', function() {
    // Get form and input elements
    const form = document.getElementById('cardFORM');
    const inputs = form.querySelectorAll('input');
    const confirmButton = document.getElementById('confirm');
    const continueButton=document.getElementById("continue");

    // Function to check if all fields are filled
    function checkForm() {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        // Enable or disable the confirm button based on the result
        confirmButton.disabled = !allFilled;
    }

    // Add event listeners to input fields
    inputs.forEach(input => {
        input.addEventListener('input', checkForm);
    });

    // Function to show the popup
    function showPopup(event) {
        event.preventDefault(); // Prevent the form from submitting
        const pop = document.getElementById('pop');
        pop.classList.add('pop-up');
    }

    // Add event listener to the form for submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        showPopup(event);
       
    });
});

// Function to close the popup
function closepopup(event) {
    event.preventDefault(); // Prevent the form from submitting
    const pop = document.getElementById('pop');
    pop.classList.remove('pop-up');
}
