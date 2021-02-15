function chiefDiv() {
    var persp = document.createElement('div');
    persp.classList.add('perspective');
    persp.id = 'perspective';
    document.getElementById('content').appendChild(persp);

    var topLabel = document.createElement('label');
    topLabel.innerHTML = 'ABOUT';
    topLabel.classList.add('tab', 'monofett');
    topLabel.htmlFor = 'tab-top';
    document.getElementById('perspective').appendChild(topLabel);

    var frontLabel = document.createElement('label');
    frontLabel.innerHTML = 'HOME';
    frontLabel.classList.add('tab', 'monofett');
    frontLabel.htmlFor = 'tab-front';
    document.getElementById('perspective').appendChild(frontLabel);

    var bottomLabel = document.createElement('label');
    bottomLabel.innerHTML = 'MENU';
    bottomLabel.classList.add('tab', 'monofett');
    bottomLabel.htmlFor = 'tab-bottom';
    document.getElementById('perspective').appendChild(bottomLabel);

    var oppoLabel = document.createElement('label');
    oppoLabel.innerHTML = 'VISIT';
    oppoLabel.classList.add('tab', 'monofett');
    oppoLabel.htmlFor = 'tab-oppo';
    document.getElementById('perspective').appendChild(oppoLabel);
    
    var topInput = document.createElement('input');
    topInput.type = 'radio'
    topInput.name = 'tabs'
    topInput.id = 'tab-top'
    document.getElementById('perspective').appendChild(topInput);

    var frontInput = document.createElement('input');
    frontInput.type = 'radio'
    frontInput.name = 'tabs'
    frontInput.id = 'tab-front'
    document.getElementById('perspective').appendChild(frontInput);

    var bottomInput = document.createElement('input');
    bottomInput.type = 'radio'
    bottomInput.name = 'tabs'
    bottomInput.id = 'tab-bottom'
    document.getElementById('perspective').appendChild(bottomInput);

    var oppoInput = document.createElement('input');
    oppoInput.type = 'radio'
    oppoInput.name = 'tabs'
    oppoInput.id = 'tab-oppo'
    document.getElementById('perspective').appendChild(oppoInput);
        
    var cubeDiv = document.createElement('div');
    cubeDiv.classList.add('cube');
    cubeDiv.id = 'cube';
    document.getElementById('perspective').appendChild(cubeDiv);
    }
    
    export default chiefDiv;
    