function myFunction()
{
  //home tab
  var home=document.getElementById('Home'); 
  var container=document.createElement('container');
  container.id="container";
  document.body.appendChild(container);
  home.appendChild(container);
  var img=document.createElement('img');
  img.setAttribute("src", "img1.jpg");
  img.setAttribute("width", "175");
  img.setAttribute("height", "200");
  img.id="img";
  container.appendChild(img);
  var checkbox=document.createElement('checkbox');
  checkbox.className="checkbox";
  img.appendChild(checkbox);
  var button=document.createElement('button');
  button.id="button";
  button.innerText="Add To Cart";
  button.onclick=AddToCart;
  img.appendChild(button);
 
  function AddToCart(){
    var i;
    var checkb = document.getElementsByClassName('checkbox');
    for (i = 0; i < checkb.length; i++) {
      if(checkb[i].checked){
        for(var j=0;j<output.length;j++){
        if(output[j]!=checkb[i].parentElement.children[1]){
          output[j]=checkb[i].parentElement.children[1];
          }
        }
      }
    }
  }
}
 
  // //cart tab
  // var contain=document.createElement('container');
  // contain.className="contain";
  // var check=document.createElement('checkbox');
  // check.className="check";
  // var image=document.createElement('img');
  // image.setAttribute("width", "175");
  // image.setAttribute("height", "200");
  // image.className="image";
  // document.getElementsByClassName("image").src= output;
  // var but=document.createElement('button');
  // but.className="but";
  // but.onclick=Remove;
  // contain.appendChild(image);
  // image.appendChild(check);
  // image.appendChild(but);
  //
  // function Remove(){
  //   var i;
  //   var chec = document.getElementsByClassName('check');
  //   for (i = 0; i < chec.length; i++) {
  //     if(chec[i].checked){
  //       chec[i].parentElement.remove();
  //     }
  //   }
  // }

var output;
function openTab(evt, links) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace("active", "");
}
document.getElementById(links).style.display = "block";
evt.currentTarget.className += " active";
}; 
