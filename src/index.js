import "./styles.css";
import form from "./get-form-value";
import { getApiInfo } from "./get-info";
import { createIcon, displayIcon, cleanSrc } from "./display-icon";
import getIcon from "./get-icon";
export { controller };


createIcon();
form();
async function controller(value){
        try {
        cleanSrc();
        const info = await getApiInfo(value);
        let iconInfo = info.iconSrc;
        console.log(iconInfo);
        iconInfo = await getIcon(iconInfo);
        displayIcon(iconInfo);
        }
        catch (error) {
           alert('City not found!, try again');

        }
        
}

