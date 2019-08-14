NodeList.prototype.forEach = Array.prototype.forEach;

var swatches = document.querySelectorAll('.swatches span');
var toggles = document.querySelectorAll('.toggle span');
var root = document.querySelector(':root');

swatches.forEach(function(swatch){
  swatch.addEventListener('click', function(e){
  root.style.setProperty('--theme-color', e.target.style.background); 
  })
})

toggles.forEach(function(toggle){
  toggle.addEventListener('click', function(e){
    root.style.setProperty('--toggle-footer', e.target.style.background);
  })
})
