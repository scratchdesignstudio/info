// used tutorial here: http://www.w3schools.com/howto/howto_js_dropdown.asp

// when the user clicks the button for the dropdown menu to appear/disappear
function dropit(){
  document.getElementById("dropOptions").classList.toggle("show");
}

// close the dropdown menu if the user clicks outside it
window.onclick = function(e){
  if(!e.target.matches('.dropdownButton')){
    var items = document.getElementsByClassName("dropdown-content");
    for(i=0;i<items.length;i++){
      var openDropdown = items[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

// when the user selects an option from the dropdown menu
function languageSelect(l){
  document.getElementById('dropButton').innerHTML = l; // set the button text to the selected option
}
