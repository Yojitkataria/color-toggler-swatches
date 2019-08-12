var swatches = document.querySelectorAll('.swatches span');
var toggles = document.querySelectorAll('.toggle span');
var root = document.querySelector(':root');

swatches.forEach((swatch) => {
  swatch.addEventListener('click', (e) => {
  root.style.setProperty('--theme-color', e.target.style.background); 
  })
})

toggles.forEach((toggle) =>{
  toggle.addEventListener('click', (e) =>{
    root.style.setProperty('--toggle-footer', e.target.style.background);
  })
})