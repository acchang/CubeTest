function chiefDiv() {
    var persp = document.createElement('div');
    persp.classList.add('perspective');
    persp.id = 'perspective';
    document.getElementById('content').appendChild(persp);
    
    var topLabel = document.createElement('label');
    topLabel.innerHTML = 'TOP';
    topLabel.classList.add('tab');
    topLabel.htmlFor = 'tab-top';
    document.getElementById('perspective').appendChild(topLabel);

    var frontLabel = document.createElement('label');
    frontLabel.innerHTML = 'FRONT';
    frontLabel.classList.add('tab');
    frontLabel.htmlFor = 'tab-front';
    document.getElementById('perspective').appendChild(frontLabel);

    var bottomLabel = document.createElement('label');
    bottomLabel.innerHTML = 'BOTTOM';
    bottomLabel.classList.add('tab');
    bottomLabel.htmlFor = 'tab-bottom';
    document.getElementById('perspective').appendChild(bottomLabel);
    
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
        
    var cubeDiv = document.createElement('div');
    cubeDiv.classList.add('cube');
    cubeDiv.id = 'cube';
    document.getElementById('perspective').appendChild(cubeDiv);
    }
    
    export default chiefDiv;
    