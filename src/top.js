function loadTop() {
    var topTab = document.createElement('div');
    topTab.classList.add('tab-content');
    topTab.id = 'topTab';
    document.getElementById('cube').appendChild(topTab);
    
    var topItem = document.createElement('h1');
    topItem.innerHTML = 'TOP';
    document.getElementById('topTab').appendChild(topItem);
    };

export default loadTop;