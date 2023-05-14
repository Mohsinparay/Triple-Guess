let randomNumber = Math.floor(Math.random() * 900) + 100;

// alert(randomNumber)
let score =0;

function guessNumber() {
	let guess = parseInt(document.getElementById("guess").value);
	if (isNaN(guess) || guess < 100 || guess > 999) {
		document.getElementById("result").innerHTML = "Please enter a valid 3-digit number.";
	} else {
		if (guess == randomNumber) {
			score++;
			document.getElementById("result").innerHTML = "Congratulations, you guessed the number!";
			document.getElementById("score").innerHTML = score;
			randomNumber = Math.floor(Math.random() * 900) + 100;
			// console.log(randomNumber);
			document.getElementById("guess").value = "";
            // alert(randomNumber);
		} else {
			if(score>0){
			score--;}
			document.getElementById("result").innerHTML = "Sorry, try again.";
			document.getElementById("score").innerHTML = score;
			document.getElementById("guess").value = "";
		}
	}
	// console.log(score);
}

// for(let i = 0; i <=999 ; i++){
//     if(i = randomNumber){
        
//         score++;
// document.getElementById("score").innerHTML = score;
//         break;
//     }
   
//     else{
//         alert("not found")
//     }
// setInterval(guessNumber(), 1000);
// }

function show(){
	let disp = document.getElementById("show");
	disp.style.visibility="visible"
}
function undo(){
	let disp2 = document.getElementById("show");
	disp2.style.visibility="hidden"
}

function refresh(){
	location.reload()
}
function know(){
	document.getElementById("guess").value = randomNumber;
	// alert(randomNumber)

}
//mohsinparay501