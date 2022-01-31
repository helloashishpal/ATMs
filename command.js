
var input=document.querySelectorAll("button");
function func(){
   var mes=this.textContent;
      alert("Selected "+ mes + "operation");
}
for(var i=0;i<input.length;i++){
    input[i].addEventListener("click",func);
}
var input=document.querySelectorAll("clear");