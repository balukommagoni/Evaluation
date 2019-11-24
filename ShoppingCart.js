var container=document.getElementsByClassName('container');
var cards=document.getElementsByClassName('cards');
var arrange=document.getElementsByClassName('arrange');

var img1 = document.createElement("IMG");
img1.setAttribute("src", "img1.jpg");
img1.setAttribute("width", "175");
img1.setAttribute("height", "200");
img1.className="img";
document.body.appendChild(img1);

var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className="checkbox";
img1.appendChild(checkbox);

var button=document.getElementsByClassName('btn');
button.onclick=function (){
  checkbox.checked
}

function openCity(evt, tabs) {
  var i, tabcontent, tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabs).style.display = "block";
  evt.currentTarget.className += " active";
}