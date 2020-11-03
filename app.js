// All Dinodata from dino.json 

var dinosData = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh",
        "fact2": "Random fact about Triceratops",
        "fact3": "Triceratops's second random fact"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long.",
        "fact2": "Random fact about Tyrannosaurus Rex",
        "fact3": "Tyrannosaurus Rex's second random fact"
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years.",
        "fact2": "Random fact about Anklyosaurus",
        "fact3": "Anklyosaurus's second random fact"
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
        "fact2": "Random fact about Brachiosaurus",
        "fact3": "Brachiosaurus's second random fact"
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
        "fact2": "Random fact about Stegosaurus",
        "fact3": "Stegosaurus's second random fact"
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
        "fact2": "Random fact about Elasmosaurus",
        "fact3": "Elasmosaurus's second random fact"
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
        "fact2": "Random fact about Pteranodon",
        "fact3": "Pteranodon's second random fact"
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs.",
        "fact2": "Random fact about Pigeon",
        "fact3": "Pigeon's second random fact"
    }
];
    // Create Dino Constructor

    function DinoConstructor(arr) {
        this.species = arr.species,
        this.weight = arr.weight,
        this.height = arr.height,
        this.diet = arr.diet,
        this.where = arr.where,
        this.when = arr.when,
        this.fact = arr.fact,
        this.fact2 = arr.fact2,
        this.fact3 = arr.fact3,
        this.image = `./images/${(this.species.toLowerCase())}.png`   
    };
    // Add prototypes to the Dino constructor

     // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    DinoConstructor.prototype.compareWeight = function() {

        if(this.weight < dinosCreated[4].weight){
            let tempWeight = (Math.round(dinosCreated[4].weight/this.weight))

            return(`The ${this.species} weighs ${tempWeight} times less than ${this.name}`)
        } else if(this.weight > dinosCreated[4].weight){
            let tempWeight = (Math.round(this.weight/dinosCreated[4].weight))
            return(`The ${this.species} weighs ${tempWeight} times more than ${dinosCreated[4].name}`)

        } else {return(`The ${this.species} and ${dinosCreated[4].name} both weights the same = ${dinosCreated[4].weight}`)}
        
    };

    // Create Dino Compare Method 2
    DinoConstructor.prototype.compareHeight = function() {
        
        if(this.height < dinosCreated[4].height){
            let tempheight = (Math.round(dinosCreated[4].height/this.height))

            return(`The ${this.species} is ${tempheight} times shorter than ${dinosCreated[4].name}`)
        } else if(this.height > dinosCreated[4].height){
            let tempheight = (Math.round(this.height/dinosCreated[4].height))
            return(`The ${this.species} is ${tempheight} times higher than ${dinosCreated[4].name}`)

        } else {return(`The ${this.species} and ${dinosCreated[4].name} both the same height = ${dinosCreated[4].height}`)}

    };

    // Create Dino Compare Method 3
    DinoConstructor.prototype.compareDiet = function() {
        
        if(this.diet == (dinosCreated[4].diet.toLowerCase())){
            return(`The ${this.species} and ${dinosCreated[4].name} are both ${dinosCreated[4].diet}s`)
        } else {return(`The ${this.species} is a ${this.diet} and the ${dinosCreated[4].name} is a ${dinosCreated[4].diet}`)}
    };

    const dinosCreated = [];

    // Create Dino Objects

    // Loop through the Original Dinosauers and invoke the Constructor function on each of them.
    (function createDinoLoop(dinosDataArr){
        let temp;   
        
        dinosDataArr.forEach((ele) => {
        
        temp = new DinoConstructor(ele); 
        dinosCreated.push(temp)
        });

       
           
    })(dinosData);

       // found the following code on how to shuffle on https://www.youtube.com/watch?v=5sNGqsMpW1E 
       function shuffleFunction(arr){
        // if(dinosCreated.length === 8){
            for(var i = arr.length -1; i > 0; i--){
                let j = Math.floor(Math.random() * (i+1));
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        // }  
        };
        shuffleFunction(dinosCreated);

    // Create Human Object
    let person;
    let Human = [];

    Human.push(person);
  
    // Add it to the dinosCreated list
    dinosCreated.splice(4, 0, Human);
    
    // Use IIFE to get human data from form
    function HumanConstructor(){
        this.species = 'human',
        this.image = `./images/${(this.species.toLowerCase())}.png`    
        this.name = document.getElementById('name').value

        // Converting the Human heights to inches
        if(!document.getElementById('meter').checked) {
            // Converting Feet from form to Inches 
           let tempHeight = Number(((document.getElementById('feet').value) * 12))
            // Adding the above inches to the inches from the from
           let sum = (tempHeight += Number(document.getElementById('inches').value))
           this.height = sum 
        } else{
            // converting cm from the form to inches
            this.height = Math.round((Number(document.getElementById('cm').value)*39.370))
        }
 
        // Adding the weight from form to Human
        if(!document.getElementById('meter').checked) {
          
            this.weight =  Number(document.getElementById('imp-weight').value)
        } else{
            // converting kg from the form to lbs
           
            this.weight = Math.round((Number(document.getElementById('kg-weight').value)*2.2046))
        }
       
        this.diet = document.getElementById('diet').value
    };

    // On button click, prepare and display infographic
    function getHumanDataFromForm() {
        
        dinosCreated[4] = new HumanConstructor()
        displayTotalArray();
        console.log('dinosCreated', dinosCreated);
        hideForm();
    }(Human);

    // Generate Tiles for each Dino in Array
    function displayTotalArray(){
           
        let divArray = []
        
       dinosCreated.forEach((ele, idx) =>{
    
        if(ele.species === "Tyrannosaurus Rex"){
            ele.image = './images/tyrannosaurusrex.png'
        }

        if(ele.species === 'human'){
            let tempEle = `<div key="${idx}" class="grid-item">
               
                    <h3>${ele.name}</h3>
                    <img src='${ele.image}'></>

            </div>`
            divArray += tempEle

        } else if(ele.species === 'Pigeon'){
            let tempEle2 = `<div key="${idx}" class="grid-item">
               
                <h3>${ele.species}</h3>
                <p>${ele.fact}</p>
                <img src='${ele.image}'></>

            </div>`
            divArray += tempEle2

        } else {
            // Create an arr to store all the 3 proto methods and the 3 facts for each Dino
            let tempArr = []; 
            tempArr.push(ele.compareWeight(), ele.compareHeight(), ele.compareDiet(), ele.fact, ele.fact2, ele.fact3)
  
            // Reuse the Shuffle function to change the order of the methods and the fact
            this.shuffleFunction(tempArr);

            let tempEle3 = `<div key="${idx}" class="grid-item">              
                    <h3>${ele.species}</h3>
                    <p>${tempArr[1]}</p>       
                    <img src='${ele.image}'></>

            </div>`
            divArray += tempEle3
            }
        })

        document.getElementById("grid").innerHTML = divArray; 
        showResetbtn();
       
    };

// Hiding reset button from DOM
// Hiding reset button from DOM
(function hideResetBtn(){
        document.getElementById('btnDiv').style.display = 'none';
})();

function showResetbtn(){
    document.getElementById('btnDiv').style.display = 'block';
}

// Hiding metric options from DOM
(function hideMetric(){
    var metr = document.getElementById('metric-fields');
        metr.style.display = 'none';
})();

function changeUnit() {
    if(document.getElementById('meter').checked){
        document.getElementById('imperial-fields').style.display = 'none';
        document.getElementById('metric-fields').style.display = 'block';
    } else{
        document.getElementById('metric-fields').style.display = 'none';
        document.getElementById('imperial-fields').style.display = 'block'; 
    }
}

function hideForm(){
    document.getElementById('dino-compare').style.display = 'none'
}

    // let initial = game.innerHTML;

function tryAgain(){
   
    window.location.reload()
    // document.querySelector('form').style.display = 'block'
    // displayTotalArray();
}


{/* <p>${ele.weight}</p>
<p>${ele.height}</p>
<p>${ele.diet}</p>
<p>${ele.where}</p>
<p>${ele.when}</p> */}