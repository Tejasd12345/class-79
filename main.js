nos_array=[];

function submit(){
var n1=document.getElementById("nos_1").value;
var n2=document.getElementById("nos_2").value;
var n3=document.getElementById("nos_3").value;
var n4=document.getElementById("nos_4").value;

nos_array.push(n1);
nos_array.push(n2);
nos_array.push(n3);
nos_array.push(n4);
console.log(nos_array);
document.getElementById("output").innerHTML=nos_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort(){
nos_array.sort();
console.log(nos_array);
document.getElementById("output").innerHTML=nos_array;
}