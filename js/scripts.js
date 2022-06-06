$(document).ready(function() {


let iceCreams = ['Chocolate', 'Lime', 'Coffee', 'Caramel cream'];

let list = document.getElementById("myList");

  iceCreams.forEach((item)=> {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);

  
  
  });
});   

