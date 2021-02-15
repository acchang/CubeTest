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
    aboutIntro.innerHTML = "From our earliest days, as species and as individuals, we have loved food in the square form.<br><br> Cheese. Tofu. Bouillion cubes. Bubblicious Gum. <br><br> Now Chef Q-Bert launched a new restaurant on this theme, in Jackson Hole, Wyoming. <br><br> Come to -- where else -- but the nation's squarest state for the squarest meal you've ever had."
    document.getElementById('aboutTab').appendChild(aboutIntro);
    };

export default loadTop;


// A Cube on a Square in a Hole in the Nation's Squarest State! Prepared by Chef Q-Bert