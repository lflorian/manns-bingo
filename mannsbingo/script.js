// Pool of words
const wordPool = [
    "\"Premium-Tafelbild\"", "\"Schule ist keine Demokratie\"", "\"Çüş\"", "früher Schluss machen", "vorbereiteter Unterricht", "unvorbereiteter Unterricht",
    "keine Hausaufgaben", "inhaltslose Ankündigungen", "jemand fragt nach einem Wort an der Tafel", "\"funky b\"", "\"Bismarck-Bubble\"", 
    "Vergleich zur Tellkampfschule", "ausschweifende Geschichte", "über 15min \"Organisatorisches\"", "\"das Leben ist hart und die Schule bereitet darauf vor\"",
    "Glasfee sprühen", "\"Maschsee Gesamtschule\"", "\"Spoiler\"", "\"ich raste aus\"", "\"Leben ist leiden sagt Buddha\"", "\"dullis\"",
    "\"wir müssen was schaffen heute\"", "iPad ist leer oder muss laden", "Elefantengriff zum Trinken", "Handy wird eingesammelt",
    "kippelt mit dem Stuhl", "\"ich sage bewusst jain\"", "jemand versteht eine ironische Bemerkung nicht", "Kopfschmerzen",
    "baut sein Handy auseinander", "Stift gegen Stirn", "kippelt mit dem Stuhl", "\"das wird ein Fest\"", "verlässt den eigenen Unterricht",
    "\"man weiß es nicht\""
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
        cell.addEventListener("click", function() {
          this.classList.toggle("highlighted");
        });
      }
    }
  }
  
  // Attach event listener to the button
  var button = document.getElementById("generateButton");
  button.addEventListener("click", generateTable);
  
  // Generate initial table on page load
  generateTable();
  