// Word Pool
const wordPool = [
  "Premium-Tafelbild",
  "fr\u00FCher Schluss machen",
  "vorbereiteter Unterricht",
  "unvorbereiteter Unterricht",
  "keine Hausaufgaben",
  "unleserliches Wort",
  "Honest Opinion",
  "nennt falschen Namen",
  "Vergleich zur Tellkampfschule",
  "ausschweifende Geschichte",
  "Organisatorisches",
  "St\u00F6rung des eigenen Unterrichts",
  "Spr\u00FChen von Glasfee",
  "iPad leer",
  "iPad muss geladen werden",
  "Elefantengriff zum Trinken",
  "Handy wird eingesammelt",
  "Handy wird nicht eingesammelt",
  "Kippeln mit dem Stuhl",
  "Baut sein Handy auseinander",
  "Stift gegeben Stirn",
  "Verl\u00E4sst den eigenen Unterricht",
  "Geschichte aus dem Lehrerzimmer",
  "\"Premium\"",
  "\"Maschsee-Gesamtschule\"",
  "\"Bismarck-Bubble\"",
  "\"Fuck the Rich\"",
  "\"Schule ist keine Demokratie\"",
  "\"\u00C7\u00FC\u015F\"",
  "\"Faktencheck\"",
  "\"yallah\"",
  "\"boah alter\"",
  "\"wir kommen zu garnichts heute\"",
  "\"ene mene muh\"",
  "\"Das Leben ist hart und die Schule bereitet darauf vor\"",
  "\"Spoiler\"",
  "\"Ich raste aus\"",
  "\"Leben ist Leiden sagt Buddha\"",
  "\"Dullis\"",
  "\"Wir m\u00FCssen was schaffen heute\"",
  "\"Ich sage bewusst Jain\"",
  "\"Das wird ein Fest\"",
  "\"Man wei\u00DF es nicht\"",
  "\"Gesunder Menschenverstand\"",
  "\"Billige Punkte\"",
  "\"Hustlen\"",
  "\"Es wird doch alles gut\"",
  "\"hochwertig\"",
  "\"eiskalt\"",
  "\"Erw\u00E4hnung Hanisch\"",
  "\"Erw\u00E4hnung Kuhlemann\"",
  "\"Erw\u00E4hnung Begemann\"",
  "\"Erw\u00E4hnung Baxmann\""
];

function getRandomWord() {
  return wordPool[Math.floor(Math.random() * wordPool.length)];
}

// Table
function generateTable() {
  var table = document.getElementById("bingoTable");

  // Clear
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


var button = document.getElementById("generateButton");
button.addEventListener("click", generateTable);

generateTable();
