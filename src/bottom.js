function loadBottom() {
    var bottomTab = document.createElement('div');
    bottomTab.classList.add('tab-content');
    bottomTab.id = 'bottomTab';
    document.getElementById('cube').appendChild(bottomTab);
    
    var bottomItem = document.createElement('h1');
    bottomItem.innerHTML = 'MENU';
    document.getElementById('bottomTab').appendChild(bottomItem);
    };

export default loadBottom;