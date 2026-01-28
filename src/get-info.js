export { getApiInfo };


async function getApiInfo(city){
    try {
        //let city = prompt('Insert your city');
        const apiRequest = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=N8TGFSMVTSPYFHJXCFAF7R35Y`);
        if (!apiRequest.ok) {
            if (apiRequest.status === 400) {
                console.error(`The city doesn't exist. Check the name and try again`);
                throw new Error(`Response status: ${apiRequest.status}`);
            } else {
                throw new Error(`HTTP error! status: ${apiRequest.status}`);
            }
        }
        const cityData = await apiRequest.json();
        console.log('Connection established:', cityData);
        const info = readJson(cityData);
        return info;
    } catch (error){
        console.log('Error detected:', error)
    }
    
};

function readJson(json){
    let cityName = json.address;
    const farenheitTemp = parseInt(json.currentConditions.temp);
    const celsiusTemp = parseInt((farenheitTemp - 32) / 1.8);
    const description = json.description;
    const conditions = json.currentConditions.conditions;
    const iconSrc = json.currentConditions.icon;

    return {cityName, farenheitTemp, celsiusTemp, description, conditions, iconSrc};
}





