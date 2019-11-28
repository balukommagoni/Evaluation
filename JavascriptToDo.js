  function Add() {//adding input 
  var li = document.createElement("li");
  li.className="list";
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");// not to make nxt stmts execute
  } 
  var textNode = document.createTextNode(inputValue);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className="checkid";
 
  var img=document.createElement('img');
  img.setAttribute("src", "download.png");
  img.setAttribute("width", "25");
  img.setAttribute("height", "25");
  img.id="img";
  img.onclick=remove;
  li.append(textNode,checkbox,img);
   
  var checkb = document.getElementsByClassName('checkid');
  var j;
  function remove() {//removing element
  for (j = 0; j < checkb.length; j++){
    if(checkb[j].checked){
      var completeElement =checkb[j].parentElement;
      var compEle=completeElement.parentElement;
      compEle.removeChild(completeElement);
    }
  }
};

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


//   var button = document.createElement("button");
//   button.innerText="Remove";
//   button.className="close";
//   li.appendChild(button);
 
//   var closeElement = document.getElementsByClassName("close");  
//   var checkb = document.getElementsByClassName('checkid');
//   var j;
//   for (var i = 0; i < closeElement.length; i++){
//   closeElement[i].onclick = function() {//removing element
//   for (j = 0; j < checkb.length; j++){
//     if(checkb[j].checked){
//       var completeElement =checkb[j].parentElement;
//       var compEle=completeElement.parentElement;
//       compEle.removeChild(completeElement);
//   }
//  }
// }
//}




