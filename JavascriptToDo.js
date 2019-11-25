function Add() {//adding input 
  var li = document.createElement("li");
  li.className="list";
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");// not to make nxt stmts execute
  } 
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className="checkid";
  li.appendChild(checkbox);

  var button = document.createElement("button");
  button.innerText="Remove";
  button.className="close";
  li.appendChild(button);
 
  var closeElement = document.getElementsByClassName("close");  
  var i;
  for (i = 0; i < closeElement.length; i++) {//removing element
    closeElement[i].onclick = function() {
      var completeElement = this.parentElement;
      var compEle=completeElement.parentElement;
      // completeElement.style.display = "none";
      compEle.removeChild(completeElement);
    }
  }
  var btn = document.createElement("button");
  btn.innerHTML="Save";
  btn.className="saveEle"; 
 
  document.getElementById("saveEle").onclick = function() {//saving the values
    var checkb = document.getElementsByClassName('checkid');//this is not working if we use classname for onclick
      var j;
      for (j = 0; j < checkb.length; j++){
        if(checkb[j].checked){
          console.log(checkb[j].parentElement);
        }
      }
    }
}






