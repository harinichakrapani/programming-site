

// run this function

var submit= document.getElementById('submit'); 
var reset=document.getElementById('reset'); 
reset.onclick=resetCalculator; 

submit.onclick= tipCalculate; 

function tipCalculate(){
  console.log("TIP CALCULATE");

	var totalBill= document.getElementById('bill').value; 
	console.log(totalBill); 

	var tipPerc= getPercChecked(); 
	console.log(tipPerc); 

	// putting an exclamation before, check if it is false
// if you have the matched returns, then return this value 
	if(!isNaN(totalBill)) { 
		console.log("IS A NUMBER");
		var tipAmount= Math.floor(totalBill*tipPerc*100)/100; 
		// console.log(tipAmount); 
		// // for decimal place 
		var roundedAmount=tipAmount.toFixed(2);  

		var tipBox= document.getElementById('tipamount'); 
		tipBox.innerHTML= '$'+ roundedAmount; 
	}  else{ 
		alert('Please enter numbers only')
		resetCalculator(); 
	}
}

//which of the buttons were selected
//one for gender and occupation 

function getPercChecked() { 

var percBtns=document.getElementsByClassName('tip-btn'); 

for (var i=0; i<percBtns.length; i++ ){

console.log(percBtns[i].checked); 

if(percBtns[i].checked==true) {

  //returning value whichever one is checked 
  return percBtns[i].value; 
	}
	}

}
 // $('reset').click(function(){
 //            $('#tipform')[0].reset();
 // });

function resetCalculator() { 

document.getElementById('bill').value = '';

var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    percBtns[i].checked = false;
  }

 var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = '$0.00';
}

//when the calculator has alpha numeric values and you need to clear the boxes



