
//Trevor Womack
//10/23/2020
//Mini challenge 9 - RNG name generator
//On this page you will find a random name generator, pulling from an array of the codestack 2020-21 schoolyear. There are no repeats 
let wickedCss = [
    "floater",
    "barrelRoll",
    "rollerRight",
    "rollerLeft",
    "heartbeat",
    "pulse",
    "rotation",
    "sideToSide",
    "zoomer",
    "zoomerOut",
    "spinner",
    "wiggle",
    "shake",
    "pound",
    "slideUp",
    "slideDown",
    "slideRight",
    "slideLeft",
    "fadeIn",
    "fadeOut",
    "rotateInRight",
    "rotateInLeft",
    "rotateIn",
    "bounceIn",
];
let nameInputField = document.getElementById("nameInputField");
let nameBank = ["Adrian","Ajay", "Alex","Anothay","Bryan","Carlos","Christy","Dylan","Demitrius","Hugo","John","Jorge","Joseph R.","Juan","Ken","Leo","Mendoza","Sean","Shannon","Tyler","Trevor","Victor"]
let namesAlreadyPicked = [] //This array will hold the names already chosen
let names = document.getElementsByClassName("list-group-item");
let nameDisplay = document.getElementById("nameDisplay");



let = pickedNamesDisplay = document.getElementById("alreadyPicked");
//This is to fill the list with names
for(let i = 0; i < names.length; i++){
    console.log(names[i].innerText);
    names[i].innerText = nameBank[i];
}
//This sets up the button and gives it the click event
let getName = document.getElementById("getName").addEventListener("click", function () {
    randomName();
    nameDisplay.className="";
    nameDisplay.className = "card-text fontSize1 pulse";
});
function randomName(){
    let nameSelected = Math.floor(Math.random() * nameBank.length);
    nameDisplay.innerText = nameBank[nameSelected];
    namesAlreadyPicked.splice(1, 0, nameBank[nameSelected]);
    nameBank.splice(nameSelected, 1);
    pickedNamesDisplay.innerText = namesAlreadyPicked;
    console.log(nameBank);
}



nameInputField.addEventListener("keypress", function(e)
{
    console.log(e);
    if(e.code == "Enter"){
        addName();
        console.log(nameBank);
        e.preventDefault();
    }
})

function addName(){
    if(nameInputField.value == "" || nameInputField.innerText == null)
    {
        nameInputField.innerText = "Please enter a name"
    }
    else 
    {
        nameBank.push(nameInputField.value);
        nameInputField.value = "";
    }
}




