const API = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var arr = [];
var select = document.getElementById("mySelect");

async function searchCity() {
    var response = await fetch(API);
    var states = await response.json();
    for (var k = 0; k < states.length; k++) {
        var updateArr = states[k].city;
        arr.push(updateArr);
    }
}
searchCity();

const startWith = (value, substring) => value.startsWith(substring);

const valueToOption = (value, input) => {
    const option = document.createElement("option");
    const endString = value.substring(input.length);
    option.innerHTML = `<span class="yellow">${input}</span>${endString}`;
    return option;
};

function addInput() {
    const input = document.querySelector("input").value;
    const newOptions = arr.filter(city => startWith(city, input)).map(city => valueToOption(city, input));
    select.innerHTML = '';
    newOptions.forEach(option => select.add(option));
}

