export { displayInfo, cleanInfo };

function displayInfo(info){
    const conditionElement = document.querySelector("#introduction");
    const descriptionElement = document.querySelector("#description");
    let cityName = info.cityName;
    const farenheitTemp = info.farenheitTemp ;
    const celsiusTemp = info.celsiusTemp;
    const description = info.description;
    const conditions = info.conditions;
    let upperCaseCityName = cityName.split("");
    upperCaseCityName[0] = upperCaseCityName[0].toUpperCase();
    upperCaseCityName = upperCaseCityName.join("");
    cityName = upperCaseCityName;
    conditionElement.textContent = `In ${cityName}, the current temperature is: `+ farenheitTemp + '°' + ' Farenheit' + ' or ' + celsiusTemp + '°' + ' Celsius.';
    descriptionElement.textContent = `${description}`;
}

function cleanInfo(){
    const conditionElement = document.querySelector("#introduction");
    const descriptionElement = document.querySelector("#description");
    conditionElement.textContent = '';
    descriptionElement.textContent = '';
}

