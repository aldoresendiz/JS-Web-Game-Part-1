let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon; // height of the sky is going to be the difference of the height minus the horizon
let heightOfGrass = horizon;

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100);
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100);

// the following line of code adds a gnome, goblin, smurf, or whatever that is to the page
let greenCharacter = newImage('assets/green-character.gif', '100px', '100px');

// now we are adding a pinetree to the page
let pineTree = newImage('assets/pine-tree.png', '450px', '200px');

//then we are adding a tree
let appleTree = newImage('assets/tree.png', '200px', '300px');

//now we add a pillar
let pillar = newImage('assets/pillar.png', '350px', '100px');

//now we are adding a crate for Peppa
let crate = newImage('assets/crate.png', '150px', '200px');

// and finally a well in case Peppa gets thirsty
let well = newImage('assets/well.png', '500px', '425px');

/* then we add an item for the player to pickup. The instructions are asking to create a new function with the same code as the newImage function but we can just 
use the same 'newImage' function and add the listener to our new created object */
let sword = newImage('assets/sword.png', '500px', '405px');

let shield = newImage('assets/shield.png', '165px', '185px');
let staff = newImage('assets/staff.png', '600px', '100px');

// I got stuck into how to display the grass and sky so I had to look at the solution.

// We need to refactor our code since there is duplicated code
function newImage(imgSrc, posLeft, posBottom) {
    let object = document.createElement('img');
    object.src = imgSrc;
    object.style.position = 'fixed';
    object.style.left = posLeft;
    object.style.bottom = posBottom;
    document.body.append(object);
    const itemCanBePicked = Boolean(imgSrc.search('sword') >= 0) || Boolean(imgSrc.search('shield') >= 0) || Boolean(imgSrc.search('staff') >= 0);
    console.log(itemCanBePicked + ' ' + imgSrc);
    if (itemCanBePicked) {
        object.addEventListener('dblclick', function() {
            object.remove();
        })    
    }
    return object;
}

function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100 + 'px', bottom+h*100 + 'px')
        }
    }
}

