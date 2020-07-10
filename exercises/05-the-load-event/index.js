// your function goes here
/*
**************************    Tipo 1    *******************************

window.addEventListener("load", loadListener);

function loadListener() {
	alert("loading finished...");
}
*/

// **************************    Tipo 2    *******************************
window.onload = function loadListener() {
	alert("loading finished...");
};
