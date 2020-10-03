const celsInput = document.querySelector('[data-temp="cels"]');
const fahrInput = document.querySelector('[data-temp="fahr"]');
const temp = document.querySelector('[data-temp="temp"]');

let tempPref = localStorage.getItem('temp');;

celsInput.addEventListener('change', function () {

    localStorage.setItem('temp', celsInput.value);

    temp.innerHTML = `${(((Number(temp.innerHTML.substring(0, 5)) - 32) * 5) / 9).toFixed(2)} &deg;C`;
});

fahrInput.addEventListener('change', function () {
    
    localStorage.setItem('temp', fahrInput.value);

    temp.innerHTML = `${(((Number(temp.innerHTML.substring(0, 5)) * 9) / 5) + 32).toFixed(2)} &deg;F`;
});

if (tempPref === 'fahr') {
    
    celsInput.checked = false;
    fahrInput.checked = true; 
    
} else {

    fahrInput.checked = false; 
    celsInput.checked = true;
}