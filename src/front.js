function loadFront() {
    var frontTab = document.createElement('div');
    frontTab.classList.add('tab-content');
    frontTab.id = 'frontTab';
    document.getElementById('cube').appendChild(frontTab);
    
    var frontItem = document.createElement('h1');
    frontItem.innerHTML = 'front';
    document.getElementById('frontTab').appendChild(frontItem);
    };

export default loadFront;