import "./styles.css";
import form from "./get-form-value";
import { getApiInfo } from "./test";
export { controller };

form();
function controller(value){
        getApiInfo(value);
}

