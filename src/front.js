function loadFront() {

    var homeTab = document.createElement('div');
    homeTab.classList.add('tab-content');
    homeTab.id = 'homeTab';
    document.getElementById('cube').appendChild(homeTab);
    
    var homeHead = document.createElement('h1');
    homeHead.innerHTML = 'Cubist Café';
    homeHead.id = 'homeHead'
    document.getElementById('homeTab').appendChild(homeHead)

    var homeImage = document.createElement('img');
    homeImage.setAttribute("src", "images/cubericecut.png");
    document.getElementById("homeTab").appendChild(homeImage);

    var homeIntro = document.createElement('p');
    homeIntro.id = 'home-intro'
    homeIntro.innerHTML = "It's Hip to be Square! <br> Home to the World-Famous 'Bar-Bee-Cubes' and 'Shish-Cube-Babs'";
    document.getElementById('homeTab').appendChild(homeIntro);

    // var frontTab = document.createElement('div');
    // frontTab.classList.add('tab-content');
    // frontTab.id = 'frontTab';
    // document.getElementById('cube').appendChild(frontTab);
    
    // var frontItem = document.createElement('h1');
    // frontItem.innerHTML = 'front';
    // document.getElementById('frontTab').appendChild(frontItem);

    };

export default loadFront;