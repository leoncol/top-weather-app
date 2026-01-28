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
        try {
        createSpinner();
        cleanTextIcon();
        cleanSrc();
        cleanInfo();
        const info = await getApiInfo(value);
        if (info) {
                let iconInfo = info.iconSrc;
                console.log(iconInfo);
                iconInfo = await getIcon(iconInfo);
                let iconText = info.conditions;
                deleteSpinner();
                displayText(iconText);
                displayIcon(iconInfo);
                displayInfo(info);
                
        } else {
                throw error;
        }
        
        }
        catch (error) {
           alert('City not found!, try again');
           deleteSpinner();


        }
        
}

