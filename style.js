const cost1 = ["Rattfratz", "Icognito", "Schluppuck"];
// "Raupi", "Waumpel", "Kikugi", "Zubat", "Eneco", "Burmi", "Hornliu", "Jurob", "Paras", "Wiesor", "Hoothoot", "Ledyba", "Webarak", "Hoppspross", "Farbeagle", "Fluffeluff", "Sonnkern", "Zirpurze", "Purmel", "Finneon", "Kleptifux", "Tarundel"


const cost2 = [/* "Nagelotz", "Maracamba", "Mabula", "AloSandan" */ "Porenta", "Volbeat", "Plusle", "Wadribie", "Wonneira", "Bidiza", "Plaudagei", "Scoppel", "GalPorenta", "Pichu"];
/* "Pummeluff", "Taubsi", "Bluzuk", "Krabby", "Rettan", "Venuflibis" " "Formeo", Habitak", "Minun", "Kecleon", "Voltoball", "Knilz", "Myrapla", "Sandan", "Enton", "Natu", "Ditto", "Pandir", "Felino", "Schneckmag", "Tannza", "Fiffyen", "Zigzachs", "Illumise", "Gehweiher", "Mobai", "Liebiskus", "Dusselgurr", "GalFlunschliko", "Irrbis", "Dedenne", "Rocara","Fynx", "Mangunior", "AloRattfratz", "Sensect", "GalPonita", "Raffel", "Ferkuli" */ 

const cost3 = [/* "Bisasam", "Schiggy", "Knofensa", "Nidoran W", "Nidoran M", "Vulpix", "Abra", "Machollo", "Ponita", "Flegmon", "Magnetilo", "Nebulak", "Tragosso", "Smogon", "Rihorn", "Goldini", "Feurigel", "Yanma", "Mogelbaum", "Pichu", "Voltilamm", "Griffel", "Traunfugil", "Kussilla" */ "Glumanda", "Kleinstein", "Amonitas", "Schlurp", "Chaneira", "Kabuto", "Tangela", "Digda", "Quapsel", "Tentacha", "Sleima", "Traumato", "Endivie", "Karnimani", "Togepi", "Lampi", "Remoraid", "Corasonn", "Pii", "Snubbull", "Baldorfish", "Phanpy",
 /* "Hydropi", "Loturzel", "Zwirrlicht", "Schwalbini", "Wingull", "Flurmel", "Azurill", "Nasgnet", "Zobiris", "Stollunior", "Camaub", "Wablu", "Puppance", "Shuppet", "Perlu", "Haspiror", "Pachirisu", "Shnebedeck", "Staralili", "Trasla", "Sheinux", "Schalellos", "Skunkapuh", 
 "Hippopotas", "Glibunkel", "Floink", "Lichtel", "Laukaps", "Pygraulon", "Elezeba", "Praktibalk", "Schallquap", "Toxiped", "Waumboll", "Makabaja", "Sesokitz", "Tarnpignon", "Quabbel", "Wattzapf", "Kastadur", "Klikk", "Golbit" */ "Geckarbor", "Flemmli", "Samurzel", "Seemops", "Quiekel", "Botogel", "Makuhita", "Frizelbliz", "Kanivanha", "Wailmer", "Tuska", "Schmerbe", "Krebscorps", "Liliep", "Anorith", "Isso", "Schneppke", "Chelast", "Panflam", "Plinfa", "Flunkifer", "Knospi", "Koknodon", "Schilterus", "Tropius", "Bamelin", "Driftlon", "Charmian", "Klingplim", "Bronzel", "Pantimimi", "Pionskora", "Mantirps", "Serpifeu", "Ottaro", 
  "Furnifraß", "Schnuthelm", "Skallyk", "Yorkleff", "Felilou", "Grillmak", "Sodamak", "Somniam", "Kiesling", "Fleknoil", "Strawickl", "Lilminip", "Ganovil", "Lithomith", "Zurrokex", "Unratütox", "Zorua", "Picochilla", "Mollimorba", "Monozyto", "Piccolente", "Gelatini", "Emolga", "Zapplardin", "Petznief", "Lin-Fu", "Geronimatz"
  , /* "Froxy", "Spoink", "Psiau", "Dartiri", "Flabébé", "Paragoni", "Vegimak", "Scampisto", "Arktip", "Robball", "Choreogel", "Wommel", "Wuffels", "Lusardin", "Garstella", "Pampuli", "Araqua", "Reißlaus", "Sankabuh", "Velursi", "GalZigzachs", "GalVoltobal", "Toxel", "Termopod", "Kamehaps", "Voldi", "Klonkett", "Fatalitee", "Bähmon", "Britzigel", "Blipp", "Micrick", "Hefel", "Krawalloro", "Sproxi", "Relluk", "PalFelino" */ "Igamaro", "Balgoras", "Koalelu", "Leufeo", "Mähikel", "Pam-Pam", "Parfi", "Iscalar", "Bithora", "Eguana", "Amarino", "Bauz", "Flamiau", "Bubungus", "Peppeck", "Imantis", "Molunk", "Frubberl", "Gufa", "AloKleinstein", "AloDigda", "AloSleima", "Chimpep", "Hopplo", "GalMakabaja", "Memmeon", "GalFlegmon", "Servol", "Salanga", "Snomnom", "Cottini", "Wolly", "Urgel", "Pikuda", "Klopptopus", "Hokumil", "Morpeko", "Felori", "Krokel", "Kwaks", "Olini", "Mobtiff", "Weherba", "Pamo", "Voltrel", "Tentagra", "Chilingel", "Flattutu", "Schligda", "Adebom"
];
const cost4 = [/* "Pikachu", "Menki", "Mauzi", "Fukano", "Dodu", "Onix", "Seeper", "Rossana", "Pinsir", "Evoli", "Dratini", "Marill", "Kramurx", "Sniebel", "Dummisel", "Hunduster", "Skorgla", "Teddiursa", "Elekid", "Nincada", "Meditie", "Tanhel", "Sonnfel", "Relicanth", "Kindwurm", "Mampfaxo", "Rotomurf", "Ohrdoch", "Galapaflos", "Barschuft", "Flunschlik", "Gladiantri", "Viscora", "Clavion", "eF-eM", "Meikro", "Flauschling", "Kupfanti", "Grolldra", "Duraludon", "Geosali", "Forgita", "Knattox", "Gruff", "Flaminkno", "Agiluza" */ 
 "Sterndu", "Owei", "Pipi", "Porygon", "Pottrott", "Rabauz", "Girafarig", "Damhirplex", "Magby", "Larvitar", "Bummelz", "Lunastein", "Vepitis", "Roselia", "Qurtel", "Knacklion", "Barschwa", "Palimpalim", "Kaumalat", "Phione", 
 "Ignivor", "Flampion", "Mammolida", "Flapteryx", "Milza", "Kapuno", "Gramokles", "Resladero", "Krabbox", "Coiffwaff", "Togedemaru", "Curelei", "Miniras", "AloMauzi", "AloVulpix", "Knapfel", "Kubuin", "Knarbon", "Legios", "Humangolith", 
 "Brimova", "GalMauzi", "GalBaldorfish", "GalFukano", "GalFlampion", "GalCorason", "GalSniebel", "GalZorua", "Klibbe", "Normifin", "Schlurm", "Flaniwal", "Lumispross", "Mortcha", "Frospino"];
const cost5 = [/* "Elektek", "Lapras", "Skaraborn", "Absol", "Karadonis", "Mopex" */ "Aerodactyl", "Kicklee", "Magmar", "Miltank", "Sengo", "Kryppuk", "Symvolara", "Frigometri", "Jiutesto", "Bisofank", "Floette", "Quartermak", "Typ: Null", "Meteno", "Sen-Long", "Moruda", "Tortunator", "Knirfish", "Lectragon", "Nigiragi"]
/*"Pescragon", "Mew", "Kangama", "Sichlor", "Tauros", "Relaxo", "Rotom", "Fermicula", "Shardrago", "Kommandutan", "Mimigma", "Leycrodon", "Gierspenst", "PalTauros", "Heerashai" */ 
const cost6 = [/* "Lavados", "Entei", "Cresselia", "Heatran", "Selfe", "Meloetta", "Kapu-Toro", "Kaguron", "Muramura", "Schlingking", "Benesaru", "Eisenkrieger", "Flatterhaar" */ "Arktos", "Suicune", "Brüllschweif", "Dinglu", "Raikou", "Registeel", "Regirock", "Regice", "Shaymin", "Tobutz", "Vesprit", "Terrakium", "Kobalium", "Viridium", "Genesect", "Keldeo", "Volcanion", "Voltriant", "Anego", "Kapu-Riki", "Kapu-Fala", "Masskito", "Meltan", "Dakuma", "Zarude", "Polaross", "Chongjian", "Beatori", "GalZapdos", "Kriechflügel", "Eisenfalter", "Eisenhand", "Boninu", "Donnersichel", "Wutpilz", "Eisenhals", "Eisenhaupt", "Eisenbündel", "Eisendorn", "Eisenblatt", "Galar-Arktos", "Sandfell", "Zeraora", "Infamomo"]
/* "Regidrago", "Darkrai", "Furienblitz",*/
const cost7 = [/* "Manaphy", "Latias", "Demeteros", "Katagami", "Marshadow" */ "Jirachi", "Diancie", "Cosmog", "Deoxys", "Eisenfels", "Regigigas", "Victini", "Hoopa", "Magearna", "Venicro", "Schabelle", "Cupidos", "Phantoross", "Windewoge", "Keilflamme", "Ursaluna", "Ogerpon", "Kopplosio", "Yuyu"]
const cost8 = ["Ho-Oh", "Dialga", "Kyurem", "Giratina", "Yveltal", "Necrozma", "Coronospa", "Zamazenta", "Terapagos"]
/* "Mewto", "Palkia", "Zekrom", "Zygarde",*/
const cost9 = ["Groudon", "Arceus"]
const pokemonTypes = ["Normal", "Feuer", "Wasser", "Elektro", "Pflanze", "Flug", "Käfer", "Gift", "Gestein", "Boden", "Kampf", "Eis", "Psycho", "Geist", "Drache", "Unlicht", "Stahl", "Fee"]


let pointCounter = 0;
let gotBonus = false;

function randomizer(max) {
  return Math.floor(Math.random() * max) + 1;
}

function pickItem(list) {
  const randomIndex = randomizer(list.length) - 1; // Adjust for zero-based indexing
  return list[randomIndex];
}

function myFunction() {
  pointCounter = 0;
  gotBonus = false;
  document.getElementById("bonus").textContent = "";
  document.getElementById("pokemon").textContent = "Dein Team ist:";
  document.getElementById("ersatz").textContent = "Wenn mehr als 10 Punkte, kannst du mit diesen Pokemon austauschen:";
  while (pointCounter < 10) {

    let firstPick = randomizer(33); // max value adjusted to account for all options up to 33

    if (firstPick >= 0 && firstPick <= 5) {
      pointCounter += 3;
      const chosenItem = pickItem(cost3);
      document.getElementById("pokemon").textContent += chosenItem + " (3 Punkte) ";

    } else if (firstPick >= 6 && firstPick <= 11) {
      const chosenItem = pickItem(cost2);
      document.getElementById("pokemon").textContent += chosenItem + " (2 Punkte) ";
      pointCounter += 2;
    } else if (firstPick >= 12 && firstPick <= 17) {
      /*const chosenItem = pickItem(cost1);
      document.getElementById("pokemon").textContent += chosenItem + " (1 Punkt) ";*/
      pointCounter += 0;
    } else if (firstPick >= 18 && firstPick <= 23) {
      const chosenItem = pickItem(cost4);
      document.getElementById("pokemon").textContent += chosenItem + " (4 Punkte) ";
      pointCounter += 4;
    } else if (firstPick >= 24 && firstPick <= 28) {
      const chosenItem = pickItem(cost5);
      document.getElementById("pokemon").textContent += chosenItem + " (5 Punkte) ";
      pointCounter += 5;
    } else if (firstPick === 29) {
      const chosenItem = pickItem(cost6);
      document.getElementById("pokemon").textContent += chosenItem + " (6 Punkte) ";
      pointCounter += 6;
    } else if (firstPick === 30) {
      const chosenItem = pickItem(cost8);
      document.getElementById("pokemon").textContent += chosenItem + " (8 Punkte) ";
      pointCounter += 8;
    } else if (firstPick === 31) {
      const chosenItem = pickItem(cost7);
      document.getElementById("pokemon").textContent += chosenItem + " (7 Punkte) ";
      pointCounter += 7;
    }
    //workaround changed 9 cost because that list is empty now
    else if (firstPick === 32) {
      //const chosenItem = pickItem(cost9);
      //document.getElementById("pokemon").textContent += chosenItem + " (9 Punkte) ";
      pointCounter += 0;
    }
    // The previous bonus condition (firstPick === 33 && gotBonus===false) is removed from the loop.
    // The bonus will be applied unconditionally after the loop or in a dedicated section.
  }

  // --- ERSATZTEAM (Läuft jetzt wieder komplett ohne Bedingung) ---
  const einErsatz = pickItem(cost2); 
  document.getElementById("ersatz").textContent += einErsatz + " ";


  // ===================================================
  // NEUER CHECK (Liest den Text direkt von der Webseite)
  // ===================================================
  
  const megaBasisNamenSet = new Set([
      "pichu", "leufeo" // Hier deine restlichen Pokémon-Namen einfügen
  ]);

  // Holt den Text von der Seite, macht ihn klein und teilt ihn bei jedem Leerzeichen auf
  const hauptTextSpende = document.getElementById("pokemon").textContent.toLowerCase().split(/\s+/);
  const ersatzTextSpende = document.getElementById("ersatz").textContent.toLowerCase().split(/\s+/);

  // Prüft, ob eines der Wörter im Set existiert
  const hauptTeamTreffer = hauptTextSpende.some(wort => megaBasisNamenSet.has(wort));
  const ersatzTeamTreffer = ersatzTextSpende.some(wort => megaBasisNamenSet.has(wort));

  if (hauptTeamTreffer) {
      console.log("Bei diesen Pokemon ist eins der neuen Mega Pokemon dabei (Hauptteam)");
  }
  if (ersatzTeamTreffer) {
      console.log("Bei diesen Pokemon ist eins der neuen Mega Pokemon dabei (Ersatzpokemon)");
  }
}
const chosenItem = pickItem(pokemonTypes);

  let selectedGens = [];
  while (selectedGens.length < 3) {
    let newGen = (Math.floor(Math.random() * 9) + 1);
    if (!selectedGens.includes(newGen)) {
      selectedGens.push(newGen);
    }
  }

  const pokeGen1 = selectedGens[0];
  const pokeGen2 = selectedGens[1];
  const pokeGen3 = selectedGens[2];

  document.getElementById("bonus").textContent += "Mono-Challenge: jeweils ein " + chosenItem + " Pokemon aus Generation " + pokeGen1 + ", " + pokeGen2 + " und " + pokeGen3 + ". ";


  document.getElementById("ersatz").textContent += pickItem(cost2) + " (2 Punkt) " + pickItem(cost2) + " (2 Punkte) " + pickItem(cost3) + " (3 Punkte) " + pickItem(cost3) + " (3 Punkte) " + pickItem(cost3) + " (3 Punkte) ";
}
  


function myFunction2() {
  pointCounter = 0;
  document.getElementById("pokemon2").textContent = "Dein Team ist:";
  document.getElementById("ersatz2").textContent = "Wenn mehr als 10 Punkte, kannst du mit diesen Pokemon austauschen:";
  while (pointCounter < 10) {

    let firstPick = randomizer(23);
    /*do {
      firstPick = randomizer(8);
      // Check for overflow with all possibilities (assuming pointCounter starts at 0)
    } while ( (firstPick === 1 && pointCounter + 3 > 10) ||
      (firstPick === 2 && pointCounter + 2 > 10) ||
      (firstPick === 3 && pointCounter + 3 > 10) ||
      (firstPick === 4 && pointCounter + 4 > 10) ||
      (firstPick === 5 && pointCounter + 5 > 10) ||
      (firstPick === 6 && pointCounter + 6 > 10) ||
      (firstPick === 7 && pointCounter + 8 > 10)
      // ... add checks for all other options (4, 5, 6, 7)
      );*/

    if ((firstPick >= 0 && firstPick <= 5) && pointCounter <= 7){
      pointCounter += 3;
      const chosenItem = pickItem(cost3);
      document.getElementById("pokemon2").textContent += chosenItem + " (3 Punkte)";

    } else if ((firstPick >= 6 && firstPick <= 7) && pointCounter <= 8){
      const chosenItem = pickItem(cost2);
      document.getElementById("pokemon2").textContent += chosenItem + " (2 Punkte)";
      pointCounter += 2;
    } else if (firstPick >= 9 && firstPick <= 9) {
      const chosenItem = pickItem(cost1);
      document.getElementById("pokemon2").textContent += chosenItem + " (1 Punkt)";
      pointCounter += 1;
    }
    else if ((firstPick >= 11 && firstPick <= 14) && pointCounter <= 6) {
      const chosenItem = pickItem(cost4);
      document.getElementById("pokemon2").textContent += chosenItem + " (4 Punkte)";
      pointCounter += 4;
    }

    else if ((firstPick >= 15 && firstPick <= 19) && pointCounter <= 5){
      const chosenItem = pickItem(cost5);
      document.getElementById("pokemon2").textContent += chosenItem + " (5 Punkte)";
      pointCounter += 5;
    }

    else if ((firstPick === 20) && pointCounter <= 4){
      const chosenItem = pickItem(cost6);
      document.getElementById("pokemon2").textContent += chosenItem + " (6 Punkte)";
      pointCounter += 6;
    }

    else if ((firstPick === 21) && pointCounter <=2) {
      const chosenItem = pickItem(cost8);
      document.getElementById("pokemon2").textContent += chosenItem + " (8 Punkte)";
      pointCounter += 8;
    } else if ((firstPick=== 22) && pointCounter <= 3) {
      const chosenItem = pickItem(cost7);
      document.getElementById("pokemon2").textContent += chosenItem + " (7 Punkte)";
      pointCounter += 7;
    } else if ((firstPick=== 23) && pointCounter <= 1) {
      const chosenItem = pickItem(cost9);
      document.getElementById("pokemon2").textContent += chosenItem + " (9 Punkte)";
      pointCounter += 9;
    }

    else {
      pointCounter += 0;
    }
  }

  document.getElementById("ersatz2").textContent += pickItem(cost1) + " (1 Punkt) " + pickItem(cost2) + " (2 Punkte) " + pickItem(cost3) + " (3 Punkte)" + pickItem(cost3) + " (3 Punkte)" + pickItem(cost3) + " (3 Punkte)";

}

function version () {
  document.getElementById("version").textContent = "Version vom 13.06.2026, zuletzt hinzugefügt: Listen sortiert";
}

version();


/*function myFunction() {

  while (pointCounter <10) {

    const firstPick = randomizer(2);
    console.log(firstPick);
    if (firstPick === 1) {
      const cost3randomizer = cost3[Math.floor(Math.random() * cost3.length)];
      document.getElementById("pokemon").textContent += cost3randomizer + "(3 Punkte)";
      pointCounter += 3;
    } else if (firstPick === 2) {
      document.getElementById("pokemon").textContent += cost2randomizer + "(2 Punkte)";
      const cost2randomizer = cost2[Math.floor(Math.random() * cost2.length)];
      pointCounter+=2;



    }
  }
}

myFunction();
function chooseRandom(){


}*/
