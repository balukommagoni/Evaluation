function openTab(evt, tab) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

var container=document.createElement('container');
container.className="container";
var cards=document.getElementsByClassName('cards');
var arrange=document.getElementsByClassName('arrange');
var checkbox=document.createElement('checkbox');
checkbox.className="checkbox";
var img=document.createElement('img');
img.setAttribute("src", "img1.jpg");
img.setAttribute("width", "175");
img.setAttribute("height", "200");
var button=document.createElement('button');
button.className="btn";
button.innerText="Add To Cart";
document.body.appendChild(img);
img.appendChild(checkbox);
img.appendChild(button);


 button.onclick=function (){
        checkbox.checked
  
      }
 

// var img1 = document.createElement("IMG");
// img1.setAttribute("src", "img1.jpg");
// img1.setAttribute("width", "175");
// img1.setAttribute("height", "200");
// img1.className="img";
// document.body.appendChild(img1);

// var checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// checkbox.className="checkbox";
// img1.appendChild(checkbox);

// var button=document.getElementsByClassName('btn');
// button.onclick=function (){
//   checkbox.checked;
// }

