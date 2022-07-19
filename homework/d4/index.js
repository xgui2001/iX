const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
   
const guessInput = document.getElementById('guess');
const cardBody = document.getElementById('card-body');
const explanationBody = document.getElementById('explaination-text');
const hintBody = document.getElementById('hint-text');

//random movie explanation generator
const random = Math.floor(Math.random() * movies.length);
const randomExplaination = document.createElement('div');
randomExplaination.innerHTML = movies[random].explanation;
explanationBody.append(randomExplaination);

submitButton.addEventListener('click', (event)=>{
    var guessTitle = guessInput.value;
    if (guessTitle == movies[random].title){
        
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = "Well done! You guessed it right"

        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-primary');
        resultDiv.classList.add('mt-4');

        cardBody.append(resultDiv);
    }
    else {
        const wrongDiv = document.createElement('div');
        wrongDiv.innerHTML = "Try again! If you need a hint, press the hint button"

        wrongDiv.classList.add('alert');
        wrongDiv.classList.add('alert-warning');
        wrongDiv.classList.add('mt-4');

        cardBody.append(wrongDiv);
    }
})

hintButton.addEventListener('click', (event)=>{
    const randomHint = document.createElement('div');
    randomHint.innerHTML = movies[random].hint;

    hintBody.append(randomHint);
})