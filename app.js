// All Dinodata from dino.json 

var dinosData = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
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
        this.image = `./images/${(this.species.toLowerCase())}.png`      
    };
    // Add prototypes to the Dino constructor

     // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    DinoConstructor.prototype.compareWeight = function() {
        console.log(`The weight of ${this.species} is ${this.weight}`)
    };

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoConstructor.prototype.compareHeight = function() {
        console.log(`The Height of ${this.species} is ${this.height}`)
    };

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    DinoConstructor.prototype.compareDiet = function() {
        console.log(`The Diet of ${this.species} is ${this.diet}`)
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

        } else {let tempEle2 = `<div key="${idx}" class="grid-item">
               
                    <h3>${ele.species}</h3>
                    <p>${ele.fact}</p>
                    <img src='${ele.image}'></>

            </div>`
            divArray += tempEle2
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

{/* <p>${ele.weight}</p>
<p>${ele.height}</p>
<p>${ele.diet}</p>
<p>${ele.where}</p>
<p>${ele.when}</p> */}