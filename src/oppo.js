function loadOppo() {
    var oppoTab = document.createElement('div');
    oppoTab.classList.add('tab-content');
    oppoTab.id = 'oppoTab';
    document.getElementById('cube').appendChild(oppoTab);
    
    var oppoItem = document.createElement('h1');
    oppoItem.innerHTML = 'oppo';
    document.getElementById('oppoTab').appendChild(oppoItem);
    };

export default loadOppo;