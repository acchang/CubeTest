function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    menu.appendChild(
        createMenuItem(
        "Beef", "🥩",
        "Free-Range, Corn-Fed"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Chicken","🐓",
        "Vegetarian Fed"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Pork","🐖",
        "Heritage Breed"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Cheese","🧀",
        "Aged 3 years"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Onion","🧅",
        "Red, Yellow"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Yam","🍠",
        "Slow-roasted"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Eggplant","🍆",
        "Heirloom variety"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Potato","🥔",
        "Idaho-grown"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Mushroom","🍄",
        "Artisanal fungi"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Tuna","🐟",
        "Line-caught"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Avocado","🥑",
        "Sustainably sourced"
        )
    );
    menu.appendChild(
        createMenuItem(
        "Pineapple","🍍",
        "Daily Special"
        )
    );
    return menu;
    }

function createMenuItem(name, pic, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("div");
    foodName.classList.add('foodName');
    foodName.textContent = name;

    const foodPic = document.createElement("div");
    foodPic.classList.add('foodPic');
    foodPic.textContent = pic;

    const foodDescription = document.createElement("div");
    foodDescription.classList.add('foodDescription');
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPic);
    menuItem.appendChild(foodDescription)

return menuItem;
}

function loadBottom() {
    var bottomTab = document.createElement('div');
    bottomTab.classList.add('tab-content');
    bottomTab.id = 'bottomTab';
    document.getElementById('cube').appendChild(bottomTab);
    
    var bottomTitle = document.createElement('h1');
    bottomTitle.innerHTML = 'MENU';
    document.getElementById('bottomTab').appendChild(bottomTitle);

    var bottomTextBox = document.createElement('div');
    bottomTextBox.classList.add('bottomTextBox');
    bottomTextBox.innerHTML = 'Pick your favorites'
    document.getElementById('bottomTab').appendChild(bottomTextBox);

    bottomTextBox.appendChild(createMenu());
  }

//   function loadBottom() {
//     var bottomTab = document.createElement('div');
//     bottomTab.classList.add('tab-content');
//     bottomTab.id = 'bottomTab';
//     document.getElementById('cube').appendChild(bottomTab);
    
//     var bottomItem = document.createElement('h1');
//     bottomItem.innerHTML = 'MENU';
//     document.getElementById('bottomTab').appendChild(bottomItem);
//     };


export default loadBottom;







