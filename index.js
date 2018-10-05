    
var animals = 3;

function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;


    var guess = elements.guess.value;
    var result = document.getElementById('result');
    
    if (guess == animals){
        result.textContent = 'You are right. I have ' +animals; 
    }
    else if (guess != animals){
        result.textContent = 'Nope.';
    }

  

}