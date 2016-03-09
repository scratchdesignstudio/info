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
};

function prep(){
  var dropdown = document.getElementById('dropOptions');
  
  var option;
  for (var i in l10n){
    option = document.createElement('a');
    option.dataset.locale = i;
    option.onclick = function(){languageSelect(this)};
    option.innerHTML = l10n[i].language;
    dropdown.appendChild(option);
  }
}
// when the user selects an option from the dropdown menu
function languageSelect(l){
  var locale = l10n[l.getAttribute('data-locale')];
  document.getElementById('dropButton').innerHTML = l.innerHTML + " ▾"; // set the button text to the selected option
  document.getElementById('translatorCredit').innerHTML = locale.translator ? locale.translator : l10n['en'].translator;
  document.getElementById('standardDescription').innerHTML = locale.standard ? locale.standard : l10n['en'].standard;
  document.getElementById('uniqueDescription').innerHTML = locale.unique ? locale.unique : l10n['en'].unique;
  document.getElementById('curatorString').innerHTML = locale.curators ? locale.curators : l10n['en'].curators;
}
