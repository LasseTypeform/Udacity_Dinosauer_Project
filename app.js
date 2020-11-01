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

        // Loop that creates the name for each Dino in the dinosCreated array
        (function createDinoName(dinosDataArr){
            let count = 1
            for(var i=0; i < dinosDataArr.length; i++) {
    
                let str = 'Dino number '+count;
          
                dinosCreated.push([str.valueOf()])
         
                count++
            }
        })(dinosData);
    
        console.log('dinosCreated =>', dinosCreated);
    
    // Create Dino Objects

    // Loop through the Original Dinosauers and invoke the Constructor function on each of them.
    (function createDinoLoop(dinosDataArr){
   
        let temp;   
        
        dinosDataArr.forEach((ele, index) => {
        
        temp = new DinoConstructor(ele); 
        dinosCreated[index].push(temp)
        });
   
    })(dinosData);

    console.log('dinosCreated =>', dinosCreated);

    // Create Human Object
    let Human;

    // Use IIFE to get human data from form
    function HumanConstructor(){

        this.species = 'human',
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

    function getHumanDataFromForm(obj) {
        
        obj = new HumanConstructor()
        console.log('Human', obj);

    }(Human);
        
        console.log('Human', Human);

   


    // Generate Tiles for each Dino in Array
    // (function ToggleForm(params) {
    //     var elem = document.getElementById('grid');
    //     elem.style['grid-template-columns'] = 'repeat(3, 1fr';
    //     elem.style['grid-template-rows'] = 'repeat(3, 1fr';
    //     elem.style['grid-template-rows'] = 'repeat(3, 1fr';
    //     elem.style['grid-row-gap'] = '3px';
    //     elem.style['grid-column-gap'] = '3px';
    //     elem.style['position'] = 'absolute';
    //     elem.style['top'] = '0';
    //     elem.style['min-width'] = '100%';
    //     elem.style['height'] = '100%';
    //     elem.style['border'] = '1px black solid';
    //     elem.style['margin'] = '0';

    // })(); 
        // Add tiles to DOM

    // Remove form from screen
    // (function ToggleForm(params) {
    //     var elem = document.getElementById('dino-compare');
    //     elem.style.display = 'none';
    // })();

// On button click, prepare and display infographic

// Hiding metric options from DOM
(function hideMetric(){
    var elem = document.getElementById('metric-fields');
        elem.style.display = 'none';
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
