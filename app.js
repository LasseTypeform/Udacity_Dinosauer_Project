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
        this.name = ''
        this.species = arr.species,
        this.weight = arr.weight,
        this.height = arr.height,
        this.diet = arr.diet,
        this.where = arr.where,
        this.when = arr.when,
        this.fact = arr.fact
      
    };
    // Add prototypes to the Dino constructor
    DinoConstructor.prototype.compareWeight = function() {
        console.log(`The weight of ${this.species} is ${this.weight}`)
    };
    DinoConstructor.prototype.compareHeight = function() {
        console.log(`The Height of ${this.species} is ${this.height}`)
    };
    DinoConstructor.prototype.compareDiet = function() {
        console.log(`The Diet of ${this.species} is ${this.diet}`)
    };


    const dinosCreated = ['name', []];

    // Loop that creates the name for each Dino in the dinosCreated array
    // (function createDinoName(dinosDataArr){
    //     let count = 1
    //     for(var i=0; i < dinosDataArr.length; i++) {

    //         let str = 'DinoNumber'+count;
      
    //         let temp = [str] = [];
    //         dinosCreated.name = str;
    //         count++
    //     }
    // })(dinosData);
    console.log('dinosCreated', dinosCreated);


    // Loop through all the Original Dinosauers and assing them to a dino name in the dinosCreated array
    // (function createDinoLoop(dinosDataArr, dinosCreated){
   
    //     let temp = [];   
    //     console.log('dinosCreated', dinosCreated)
        
    //     dinosDataArr.forEach((ele, index) => {
    //         idx = index

    //         temp = new DinoConstructor(dinosDataArr[index]); 
            
    //         console.log('dinosCreated', dinosCreated)
    //         console.log('dinosCreated[index]', dinosCreated[idx])

    //         console.log('temp after forEach', temp);

    //       });

    // })(dinosData, dinosCreated);

    console.log('dinosCreated =>', dinosCreated);


    // Create Dino Objects
        // let newDino = Object.create(DinoConstructor)

        // console.log(newDino)

    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    (function ToggleForm(params) {
        var elem = document.getElementById('grid');
        elem.style['grid-template-columns'] = 'repeat(3, 1fr';
        elem.style['grid-template-rows'] = 'repeat(3, 1fr';
        elem.style['grid-template-rows'] = 'repeat(3, 1fr';
        elem.style['grid-row-gap'] = '3px';
        elem.style['grid-column-gap'] = '3px';
        elem.style['width'] = '80vw';
        elem.style['height'] = '80vh';
        elem.style['border'] = '1px black solid';
    })(); 
        // Add tiles to DOM

    // Remove form from screen
    (function ToggleForm(params) {
        var elem = document.getElementById('dino-compare');
        elem.style.display = 'none';
    })();

// On button click, prepare and display infographic
