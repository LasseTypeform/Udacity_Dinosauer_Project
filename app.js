
var allDinos = [];

// Fetching data from the dino.json file in repository



const getDataFromJson = (async() => {

    // Attempt to retreive data from the json file:
    try{
        let response = await (await fetch('./dino.json')).json();

        // console.log('response.Dinos =>', response.Dinos)

        response.Dinos.forEach(ele => {
            // console.log(ele)
            // console.log(response.Dinos[ele])

            allDinos.push(ele)
        })
        
    }   // If error happens, the following is show:
        catch (error) {
        console.log('Error in try/catch=>', error)
    }

})();

// console.log('allDinos', allDinos);
// console.log('allDinos =>', allDinos);

    // (function newLoop(arrnew) {
    //     debugger
    //     // console.log(arrnew);

    //    arrnew.forEach(ele => console.log(ele));

  
             
    // })(allDinos);

    // const newLoop = function(arrnew) {
    //     // debugger
    //     // console.log(arrnew);

    //    arrnew.forEach(ele => console.log(ele));
    // };

    let myLoopFunction = (function(arr) {
        temp = arr
        let arrnew = []
        function innerLoop (temp) {
            temp.forEach( (ele, idx) => arrnew.push(ele[idx]));
            console.log(arrnew);
        }
        return{
            newMethod: innerLoop
        };
    }());

   
    

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
