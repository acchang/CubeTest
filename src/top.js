function loadTop() {
    var aboutTab = document.createElement('div');
    aboutTab.classList.add('tab-content');
    aboutTab.id = 'aboutTab';
    document.getElementById('cube').appendChild(aboutTab);
    
    var aboutHero = document.createElement('div');
    aboutHero.classList.add('abouthero');
    aboutHero.id = 'aboutHero';
    document.getElementById('aboutTab').appendChild(aboutHero);

    var aboutHead = document.createElement('h1');
    aboutHead.innerHTML = 'about';
    aboutHead.id = 'aboutHead'
    document.getElementById('aboutHero').appendChild(aboutHead)

    var aboutIntro = document.createElement('p');
    aboutIntro.id = 'aboutIntro'
    aboutIntro.innerHTML = "Who doesn't like a Square Meal?<br> From the earliest times, humanity has loved food cut into squares.<br>Cube steak. Cheese. Tofu. Bubblicious Gum.<br>
    document.getElementById('aboutTab').appendChild(aboutIntro);
    };

export default loadTop;


// A Cube on a Square in a Hole in the Nation's Squarest State! Prepared by Chef Q-Bert