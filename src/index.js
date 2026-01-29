import "./styles.css";
import form from "./get-form-value";
import { getApiInfo } from "./get-info";
import { displayInfo, cleanInfo } from "./display-info";
import { createIcon, displayIcon, cleanSrc, createTextIcon, displayText, cleanTextIcon } from "./display-icon";
import { createSpinner, deleteSpinner } from "./loading-spinner";
import getIcon from "./get-icon";
export { controller };


createIcon();
createTextIcon();
form();
async function controller(value){
        
        createSpinner();
        cleanTextIcon();
        cleanSrc();
        cleanInfo();
        const info = await getApiInfo(value);
        if (info) {
                let iconInfo = info.iconSrc;
                iconInfo = await getIcon(iconInfo);
                let iconText = info.conditions;
                displayText(iconText);
                displayIcon(iconInfo);
                displayInfo(info);
                
        } 
        deleteSpinner();
        
        
}

