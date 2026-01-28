export { createIcon, displayIcon,cleanSrc, createTextIcon, displayText, cleanTextIcon }

function createIcon(){
    const iconElement = document.createElement('img');
    iconElement.id = 'icon';
    const iconPlacer = document.querySelector('#icon-placer');
    iconPlacer.appendChild(iconElement);

};

function createTextIcon(){
    const textIcon = document.createElement('p');
    textIcon.id = 'text-icon';
    const iconPlacer = document.querySelector('#icon-placer');
    iconPlacer.appendChild(textIcon);

};

function displayText(text){
    const textIcon = document.querySelector('#text-icon');
    textIcon.textContent = `Weather Condition: ${text}`;
}

function displayIcon(src){
    const iconElement = document.querySelector('#icon');
    iconElement.src = src;
};

function cleanTextIcon(){
    const textIcon = document.querySelector('#text-icon');
    textIcon.textContent = '';
}

function cleanSrc(){
    const iconElement = document.querySelector('#icon');
    iconElement.src = '';
}
