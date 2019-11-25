function Add() {//adding input 
  var li = document.createElement("li");
  li.className="list";
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className="checkid";
  li.appendChild(checkbox);

  var button = document.createElement("button");
  button.innerHTML="Remove";
  button.className="close";
  li.appendChild(button);
  
  var closeElement = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < closeElement.length; i++) {//making display none
    closeElement[i].onclick = function() {
      var completeElement = this.parentElement;
      completeElement.style.display = "none";
    }
  }
  var btn = document.createElement("button");
  btn.innerHTML="Save";
  btn.className="saveEle"; 
 
  document.getElementById("saveEle").onclick = function() {//saving the values
    var checkb = document.getElementsByClassName('checkid');
      var j;
      for (j = 0; j < checkb.length; j++){
        if(checkb[j].checked){
          console.log(checkb[j].parentElement);
        }
      }
    }
}






