export default


async function getApiInfo(){
    let city = prompt('Insert your city');
    const apiRequest = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=N8TGFSMVTSPYFHJXCFAF7R35Y`);
    const cityData = await apiRequest.json();
    console.log(cityData);

};


