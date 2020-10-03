const celsInput2 = document.querySelector('[data-temp="cels2"]');
const fahrInput2 = document.querySelector('[data-temp="fahr2"]');
const temp2 = document.querySelector('[data-temp="temp2"]');

let tempPref2 = document.cookie.split('; ');
let indexCookies = tempPref2.findIndex(function(element) {
    return element.includes('temp');
});

tempPref2 = tempPref2[indexCookies].split('=')[1];

celsInput2.addEventListener('change', function () {

    document.cookie = `temp=${celsInput2.value}; expires=Sat, 17 Oct 2020 00:00:00 UTC`;

    temp2.innerHTML = `${(((Number(temp2.innerHTML.substring(0, 5)) - 32) * 5) / 9).toFixed(2)} &deg;C`;
});

fahrInput2.addEventListener('change', function () {
    
    document.cookie = `temp=${fahrInput2.value}; expires=Sat, 17 Oct 2020 00:00:00 UTC`;

    temp2.innerHTML = `${(((Number(temp2.innerHTML.substring(0, 5)) * 9) / 5) + 32).toFixed(2)} &deg;F`;
});

if (tempPref2 === 'fahr') {
    
    celsInput2.checked = false;
    fahrInput2.checked = true; 
    
} else {

    fahrInput2.checked = false; 
    celsInput2.checked = true;
}