var cont=0;

function myFunctionBlack(){
    document.body.style.backgroundColor = "black";
 	document.getElementById("c").style.color = "white"; 
}

function myFunctionWhite(){
	document.body.style.backgroundColor = "white";
 	document.getElementById("c").style.color = "black"; 
}

function myFunction() {
	if(cont==0){
		document.body.style.backgroundColor = "black";
 		document.getElementById("c").style.color = "white"; 
 		cont++;
 	}else{
 		document.body.style.backgroundColor = "white";
 		document.getElementById("c").style.color = "black"; 
 		cont--;
 	}
}
