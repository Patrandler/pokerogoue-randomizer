const cost1 = ["Rattfratz", "Icognito", "Schluppuck"];
// "Raupi", "Waumpel", "Kikugi", "Zubat", "Eneco", "Burmi", "Hornliu", "Jurob", "Paras", "Wiesor", "Hoothoot", "Ledyba", "Webarak", "Hoppspross", "Farbeagle", "Fluffeluff", "Sonnkern", "Zirpurze", "Purmel", "Finneon", "Kleptifux", "Tarundel"


const cost2 = ["Porenta", "Krabby", "Volbeat", "Plusle", "Wadribie", "Wonneira", "Bidiza", "Nagelotz", "Plaudagei", "Venuflibis", "Maracamba", "Scoppel", "Mabula", "AloSandan", "GalPorenta"];
/* "Pummeluff", "Taubsi", "Bluzuk", "Rettan", " "Formeo", Habitak", "Minun", "Kecleon", "Voltoball", "Knilz", "Myrapla", "Sandan", "Enton", "Natu", "Ditto", "Pandir", "Felino", "Schneckmag", "Tannza", "Fiffyen", "Zigzachs", "Illumise", "Gehweiher", "Mobai", "Liebiskus", "Dusselgurr", "GalFlunschliko", "Irrbis", "Dedenne", "Rocara","Fynx", "Mangunior", "AloRattfratz", "Sensect", "GalPonita", "Raffel", "Ferkuli" */ 

const cost3 = ["Bisasam", "Schiggy", "Glumanda", "Kleinstein", "Amonitas", "Schlurp", "Chaneira", "Kabuto", "Tangela", "Knofensa", "Nidoran W", "Nidoran M", "Vulpix", "Digda", "Quapsel", "Abra", "Machollo", "Tentacha",  "Ponita", "Flegmon", "Magnetilo", "Sleima", "Nebulak", "Traumato", "Tragosso", "Smogon", "Rihorn", "Goldini", "Endivie", "Feurigel", "Karnimani", "Togepi", "Lampi", "Yanma", "Mogelbaum", "Remoraid", "Corasonn", "Pichu", "Pii", "Voltilamm", "Griffel", "Traunfugil", "Snubbull", "Baldorfish", "Phanpy", "Kussilla"
  , "Geckarbor", "Flemmli", "Hydropi", "Loturzel", "Zwirrlicht", "Samurzel", "Seemops", "Quiekel", "Botogel", "Schwalbini", "Wingull", "Flurmel", "Makuhita", "Azurill", "Nasgnet", "Zobiris", "Stollunior", "Frizelbliz", "Kanivanha", "Wailmer", "Camaub", "Spoink", "Tuska", "Wablu", "Schmerbe", "Krebscorps", "Puppance", "Liliep", "Anorith", "Shuppet", "Isso", "Schneppke", "Perlu"
  , "Chelast", "Panflam", "Plinfa", "Flunkifer", "Haspiror", "Pachirisu", "Shnebedeck", "Staralili", "Trasla", "Sheinux", "Knospi", "Koknodon", "Schilterus", "Tropius", "Bamelin", "Schalellos", "Driftlon", "Charmian", "Klingplim", "Skunkapuh", "Bronzel", "Pantimimi", "Hippopotas", "Pionskora", "Glibunkel", "Mantirps"
  , "Serpifeu", "Floink", "Ottaro", "Lichtel", "Furnifraß", "Laukaps", "Schnuthelm", "Skallyk", "Yorkleff", "Felilou", "Pygraulon", "Vegimak", "Grillmak", "Sodamak", "Somniam", "Elezeba", "Kiesling", "Fleknoil", "Praktibalk", "Schallquap", "Strawickl", "Toxiped", "Waumboll", "Lilminip", "Ganovil", "Lithomith", "Zurrokex", "Makabaja", "Unratütox", "Zorua", "Picochilla", "Mollimorba", "Monozyto", "Piccolente", "Gelatini", "Sesokitz", "Emolga", "Tarnpignon", "Quabbel", "Wattzapf", "Kastadur", "Klikk", "Zapplardin", "Petznief", "Lin-Fu", "Golbit", "Geronimatz"
  , "Igamaro", "Froxy", "Balgoras", "Psiau", "Koalelu", "Dartiri", "Leufeo", "Flabébé", "Mähikel", "Paragoni", "Pam-Pam", "Parfi", "Flauschling", "Iscalar", "Bithora", "Scampisto", "Eguana", "Amarino", "Arktip"
  , "Bauz", "Flamiau", "Robball", "Choreogel", "Bubungus", "Peppeck", "Wommel", "Wuffels", "Lusardin", "Garstella", "Pampuli", "Araqua", "Imantis", "Molunk", "Frubberl", "Reißlaus", "Sankabuh", "Gufa", "AloKleinstein", "Velursi", "AloDigda", "AloSleima"
  , "Chimpep", "Hopplo", "GalMakabaja", "GalZigzachs", "GalVoltobal", "Toxel", "Memmeon", "GalFlegmon", "Termopod", "Servol", "Salanga", "Snomnom", "Cottini", "Wolly", "Kamehaps", "Voldi", "Klonkett", "Urgel", "Pikuda", "Klopptopus", "Fatalitee", "Bähmon", "Hokumil", "Britzigel", "Morpeko"
  , "Felori", "Krokel", "Kwaks", "Blipp", "Olini", "Mobtiff", "Weherba", "Micrick", "Pamo", "Hefel", "Krawalloro", "Voltrel", "Sproxi", "Tentagra", "Chilingel", "Relluk", "Flattutu", "Schligda", "Adebom", "PalFelino"
];
const cost4 = ["Pikachu", "Sterndu", "Owei", "Pipi", "Porygon", "Menki", "Mauzi", "Fukano", "Dodu", "Onix", "Seeper", "Rossana", "Pinsir", "Evoli",  "Dratini", "Marill", "Kramurx", "Pottrott", "Sniebel", "Rabauz", "Dummisel", "Hunduster", "Girafarig", "Skorgla", "Teddiursa", "Damhirplex", "Elekid", "Magby", "Larvitar"
  , "Bummelz", "Nincada", "Meditie", "Tanhel", "Lunastein", "Vepitis", "Roselia", "Qurtel", "Knacklion", "Sonnfel", "Barschwa", "Palimpalim", "Relicanth", "Kindwurm"
  , "Mampfaxo", "Kaumalat", "Phione"
  ,  "Rotomurf", "Ignivor", "Ohrdoch", "Flampion", "Galapaflos", "Barschuft", "Mammolida", "Flapteryx", "Milza", "Flunschlik", "Gladiantri", "Kapuno"
  , "Viscora", "Gramokles", "Clavion", "Resladero", "eF-eM", "Krabbox", "Coiffwaff", "Togedemaru", "Curelei", "Miniras", "AloMauzi", "AloVulpix"
  , "Meikro", "Knapfel", "Kubuin", "Kupfanti", "Knarbon", "Grolldra", "Legios", "Humangolith", "Brimova", "Duraludon", "GalMauzi", "GalBaldorfish", "GalFukano", "GalFlampion", "GalCorason", "GalSniebel", "GalZorua"
  , "Geosali", "Klibbe", "Forgita", "Normifin", "Knattox", "Schlurm", "Flaniwal", "Lumispross", "Gruff", "Flaminkno", "Agiluza", "Mortcha", "Frospino"];
const cost5 = ["Aerodactyl", "Elektek", "Kicklee", "Magmar", "Lapras", "Skaraborn", "Miltank", "Sengo", "Absol", "Kryppuk", "Symvolara", "Frigometri", "Karadonis", "Jiutesto", "Bisofank", "Floette", "Quartermak", "Typ: Null", "Meteno", "Sen-Long", "Moruda", "Tortunator", "Knirfish", "Lectragon", "Mopex", "Nigiragi"]
/*"Pescragon", "Mew", "Kangama", "Sichlor", "Tauros", "Relaxo", "Rotom", "Fermicula", "Shardrago", "Kommandutan", "Mimigma", "Leycrodon", "Gierspenst", "PalTauros", "Heerashai" */ 
const cost6 = ["Lavados", "Arktos", "Entei", "Suicune", "Brüllschweif", "Dinglu", "Raikou", "Registeel", "Regirock", "Regice", "Cresselia", "Shaymin", "Heatran", "Selfe", "Tobutz", "Vesprit", "Terrakium", "Kobalium", "Meloetta", "Viridium", "Genesect", "Keldeo", "Volcanion", "Voltriant", "Kapu-Toro", "Anego", "Kaguron", "Muramura", "Kapu-Riki", "Kapu-Fala", "Schlingking", "Masskito", "Meltan", "Dakuma", "Zarude", "Polaross", "Chongjian", "Benesaru", "Beatori", "GalZapdos", "Kriechflügel", "Eisenfalter", "Eisenhand", "Boninu", "Eisenkrieger", "Donnersichel", "Flatterhaar", "Wutpilz", "Eisenhals", "Eisenhaupt", "Eisenbündel", "Eisendorn", "Eisenblatt", "Galar-Arktos", "Sandfell", "Zeraora", "Infamomo"]
/* "Regidrago", "Darkrai", "Furienblitz",*/
const cost7 = ["Jirachi", "Diancie", "Cosmog", "Deoxys", "Eisenfels", "Manaphy", "Latias", "Regigigas", "Victini", "Demeteros", "Hoopa", "Magearna", "Katagami", "Venicro", "Marshadow", "Schabelle", "Cupidos", "Phantoross", "Windewoge", "Keilflamme", "Ursaluna", "Ogerpon", "Kopplosio", "Yuyu"]
const cost8 = ["Ho-Oh", "Dialga", "Kyurem", "Giratina", "Zekrom", "Yveltal", "Necrozma", "Coronospa", "Zamazenta", "Terapagos"]
/* "Mewto", "Palkia", "Zygarde",*/
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
  document.getElementById("version").textContent = "Version vom 21.06.2025, zuletzt hinzugefügt: Giratina, Eisenfels";
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
