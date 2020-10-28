
var allDinos = [];

// Fetching data from the dino.json file in repository

const getDataFromJson = (async() => {

    // Attempt to retreive data from the json file:
    try{
        let response = await (await fetch('./dino.json')).json();


        allDinos.push(response.Dinos)

        //If all goes well, response is stored
        return {
            allDinos
        }
    }   // If error happens, the following is show:
        catch (error) {
        console.log('Error in try/catch=>', error)
    }

})();

console.log('allDinos =>', allDinos)
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
