/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console


console.log('hi');
var allGenes = [];

// fetch response from staging metaphysics api
fetch('https://metaphysics-staging.artsy.net')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

// give me 3 random genes

var button = document.getElementById("gene-sup");
var geneResults = document.getElementById("gene-results");
button.onclick = function(){
    var results = randomPicker(allGenes)
    geneResults.innerHTML = "";
  for (var x=0; x<results.length; x++){
    var gene = results[x];
    geneResults.innerHTML += "<br></br><a href='https://staging.artsy.net/gene/" + gene.slug + "' target=\"_blank\">" + gene.name + "</a>"; 
  }
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomPicker(arrayOfSomething){
 return [arrayOfSomething[getRandomInt(arrayOfSomething.length)], arrayOfSomething[getRandomInt(arrayOfSomething.length)], arrayOfSomething[getRandomInt(arrayOfSomething.length)]]  
}



