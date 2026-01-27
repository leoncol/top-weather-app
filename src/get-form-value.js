import { controller } from "./index";
export default
function selectForm (){
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        const inputValue = input.value
        controller(inputValue);
    })
    
    
    console.log(form);
}


