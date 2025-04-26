//your JS code here. If required.
let input=document.getElementById("fname");
// Add a blur event listener
input.addEventListener('blur', function(){
	input.value=input.value.toUpperCase();
})