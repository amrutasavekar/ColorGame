
var numOfSquares=6;
var colors= generateColors(6);
var reset=document.querySelector("#reset")

var squares=document.querySelectorAll(".square");
var select=pickRandom();
var pickedColor=colors[select];
var ColorDisplay=document.getElementById("rgb")
var message=document.getElementById("Message");
ColorDisplay.textContent=pickedColor;
var h1=document.getElementById("H1");

var easy=document.querySelector("#easy")
var hard=document.querySelector("#hard")

easy.addEventListener("click",function(){
	easy.classList.add("selected")
	hard.classList.remove("selected")
	
	numOfSquares=3
	colors=generateColors(numOfSquares);
	select=pickRandom();
	pickedColor=colors[select];
	ColorDisplay.textContent=pickedColor;

	for(var i=0; i<squares.length; i++)
		{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
			squares[i].style.display="block"
		}
		else
		{
			squares[i].style.background="#232323"
			squares[i].style.display="none"
				
		}
		}
	reset.textContent="New Color";
	h1.style.background="rgb(72,110,173)";

});

hard.addEventListener("click",function(){
	easy.classList.remove("selected")
	hard.classList.add("selected")
	numOfSquares=6
	colors=generateColors(numOfSquares);
	select=pickRandom();
	pickedColor=colors[select];
	ColorDisplay.textContent=pickedColor;

	for(var i=0; i<squares.length; i++)
		{
			squares[i].style.background=colors[i];
			squares[i].style.display="block"
		}
	
});


reset.addEventListener("click",function(){
	colors=generateColors(6);
	select=pickRandom();
	pickedColor=colors[select];
	ColorDisplay.textContent=pickedColor;

	for(var i=0; i<squares.length; i++)
		{
			squares[i].style.background=colors[i];
			squares[i].style.display="block"
		}

	reset.textContent="New Color";
	message.textContent=""
	h1.style.background="rgb(72,110,173)";
	hard.classList.add("selected")
	easy.classList.remove("selected")	

});


for(var i=0; i<squares.length; i++)
{
	
			squares[i].style.background=colors[i];
			squares[i].addEventListener("click",function(){
			var matchcolor = this.style.background;
			if (matchcolor === pickedColor)
			{
		
				message.textContent="You win!";
				reset.textContent="Play Again!"
				h1.style.background=pickedColor; 
				changeColor(pickedColor);
			}
			else 
			{
				message.textContent="Try Again";
				this.style.background="#232323"
			}
		});
	

}

function changeColor(colr)
{
	for(var j=0; j<squares.length; j++)
	{
		squares[j].style.background=colr;
	}
}

function pickRandom()
{
	return Math.floor(Math.random() * colors.length);
}

function generateColors(num) 
{

		var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;

}

function randomColor()

{
	var r= Math.floor(Math.random() * 255);
	var g= Math.floor(Math.random() * 255);
	var b= Math.floor(Math.random() * 255);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}
