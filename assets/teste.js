var count = 0;
var CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count = count + 1;
	CURRENT_NUMBER.innerHTML = count;
    if (count>0){
        document.getElementById('currentNumber').style.color = 'green';
    }
    if (count===0){
        document.getElementById('currentNumber').style.color = 'black';
    }
}

function decrement() {
	count = count - 1;
	CURRENT_NUMBER.innerHTML = count;
    if (count<0){
        document.getElementById('currentNumber').style.color = 'red';
    }
    if (count===0){
        document.getElementById('currentNumber').style.color = 'black';
    }
}





