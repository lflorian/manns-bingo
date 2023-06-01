// Pool of words
const wordPool = [
    "\"Premium-Tafelbild\"", "\"Schule ist keine Demokratie\"", "\"Çüş\"", "früher Schluss machen", "Unterricht unvorbereitet", "keine Hausaufgaben", "Unterricht vorbereitet", 
    "keine Hausaufgaben", "inhaltslose Ankündigungen", "jemand fragt nach einem Wort an der Tafel", "\"funky b\"", "\"Bismarck-Bubble\"", "Vergleich zur Tellkampfschule", 
    "ausschweifende Geschichte", "über 15min \"Organisatorisches\"", "\"das Leben ist hart und die Schule bereitet darauf vor\"",
    "Glasfee sprühen", "\"Maschsee Gesamtschule\"", "\"Ich raste aus!\"", "\"Leben ist leiden sagt Buddha\"", "\"dullis\"", "iPad ist leer oder muss laden", 
    "Elefantengriff zum Trinken", "Handy wird eingesammelt",
    "kippelt mit dem Stuhl", "\"Schule ist keine Demokratie\"", "\"ich sag bewusst jain\"", "jemand versteht ironische Bemerkung nicht", "Kopfschmerzen", 
    "baut sein Handy auseinander", "Stift gegen Stirn", "kippelt mit dem Stuhl",
    "\"das wird ein Fest\"", "verlässt den eigenen Unterricht", "\"man weiß es nicht\"", "verweist auf das Manns-Bingo-Spiel"
  ];
  
  // Get random word from the pool
  function getRandomWord() {
    return wordPool[Math.floor(Math.random() * wordPool.length)];
  }
  
  // Generate the table
  function generateTable() {
    var table = document.getElementById("bingoTable");
  
    // Clear previous table content
    table.innerHTML = "";
  
    // Generate new table cells
    for (var i = 0; i < 4; i++) {
      var row = table.insertRow();
      for (var j = 0; j < 4; j++) {
        var cell = row.insertCell();
        cell.textContent = getRandomWord();
      }
    }
  }
  
  // Attach event listener to the button
  var button = document.getElementById("generateButton");
  button.addEventListener("click", generateTable);
  
  // Generate initial table on page load
  generateTable();
  
  // Get all table cells
var cells = document.querySelectorAll("#bingoTable td");

// Add click event listener to each cell
cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    this.classList.toggle("highlighted");
  });
});
