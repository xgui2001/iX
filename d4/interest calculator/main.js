const amountInput = document.getElementById('amount-input');
const rateInput = document.getElementById('rate-input');
const yearInput = document.getElementById('year-input');
const buttonInput = document.getElementById('button');

const cardBody = document.getElementById('card-body');

button.addEventListener('click', (event)=>{
    const amount = amountInput.Value;
    const rate = rateInput.Value;
    const year = yearInput.Value;

    let total = amount * Math.pow((1+(rate/100)), year);
    console.log(total);

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = '$' + total.toFixed(2);

    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-primary');
    resultDiv.classList.add('mt-4');

    cardBody.append(resultDiv);
});

