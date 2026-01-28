export { createIcon, displayIcon,cleanSrc }

function createIcon(){
    const iconElement = document.createElement('img');
    iconElement.id = 'icon';
    const iconPlacer = document.querySelector('#icon-placer');
    iconPlacer.appendChild(iconElement);

};

function displayIcon(src){
    const iconElement = document.querySelector('#icon');
    iconElement.src = src;
};

function cleanSrc(){
    const iconElement = document.querySelector('#icon');
    iconElement.src = '';
}
