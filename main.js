// used tutorial here: http://www.w3schools.com/howto/howto_js_dropdown.asp

// when the user clicks the button for the dropdown menu to appear/disappear
function dropit(){
  document.getElementById("dropOptions").classList.toggle("show");
}

// read hash and adjust accordingly on page load
window.onload = function(){
 if(location.hash){
   langSelect(location.hash.substring(1));
 }
};

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

// creates link objects for the dropdown
function prep(){
  var dropdown = document.getElementById('dropOptions');

  var option;
  for (var i in l10n){
    option = document.createElement('a');
    option.dataset.locale = i;
    option.onclick = function(){
        var lang = this.getAttribute('data-locale');
        location.hash = lang;
        langSelect(lang);
    };
    option.innerHTML = l10n[i].language;
    dropdown.appendChild(option);
  }
}

// switch language according to its two-letter code
function langSelect(hash){
  if(l10n[hash]){
    var locale = l10n[hash];
    document.getElementById('dropButton').innerHTML = l10n[hash].language + " ▾"; // set the button text to the selected option
    document.getElementById('translatorCredit').innerHTML = locale.translator ? locale.translator : l10n['en'].translator;
    document.getElementById('standardDescription').innerHTML = locale.standard ? locale.standard : l10n['en'].standard;
    document.getElementById('uniqueDescription').innerHTML = locale.unique ? locale.unique : l10n['en'].unique;
    document.getElementById('curatorString').innerHTML = locale.curators ? locale.curators : l10n['en'].curators;
  }
}
