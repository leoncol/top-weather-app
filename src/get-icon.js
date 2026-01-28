export default

async function getIcon(icon){
    
    const getModule = await import(`./assets/img/2nd Set - Color/${icon}.png`);
    const importIcon = getModule.default;
    return importIcon;
    
    
};

