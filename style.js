<p id="pokemon">Dein Team ist:</p>
<p id="ersatz">Wenn mehr als 10 Punkte, kannst du mit diesen Pokemon austauschen:</p>
<p id="bonus"></p>

<button onclick="myFunction()">Generiere neues Team</button>

const cost1 = ["Raupi", "Zubat", "Hornliu", "Jurob", "Rattfratz", "Paras", "Wiesor", "Hoothoot", "Ledyba", "Webarak", "Hoppspross", "Farbeagle", "Fluffeluff", "Sonnkern", "Icognito"
  , "Waumpel", "Eneco", "Schluppuck", "Zirpurze", "Burmi", "Purmel", "Kikugi", "Finneon", "Kleptifux", "Tarundel"];
const cost2 = ["Taubsi", "Habitak", "Pummeluff", "Porenta", "Rettan", "Sandan", "Voltoball", "Myrapla", "Bluzuk", "Enton", "Krabby", "Ditto", "Natu", "Schneckmag", "Felino", "Tannza"
  , "Fiffyen", "Zigzachs", "Knilz", "Kecleon", "Volbeat", "Gehweiher", "Formeo", "Plusle", "Minun", "Mobai", "Pandir", "Illumise", "Liebiskus"
  , "Wadribie", "Wonneira", "Bidiza", "Nagelotz", "Plaudagei", "Venuflibis", "Maracamba", "Dusselgurr", "Irrbis", "Dedenne", "Rocara", "Fynx", "Scoppel", "Mangunior", "Mabula", "AloRattfratz"
  , "Raffel", "Sensect", "AloSandan", "GalPonita", "GalPorenta", "GalFlunschliko", "Ferkuli" ];
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
const cost5 = ["Aerodactyl", "Elektek", "Mew", "Kangama", "Sichlor", "Kicklee", "Magmar", "Tauros", "Lapras", "Relaxo", "Skaraborn", "Miltank", "Sengo", "Absol", "Kryppuk", "Rotom", "Symvolara", "Frigometri", "Fermicula", "Karadonis", "Jiutesto", "Shardrago", "Bisofank", "Floette"
  , "Quartermak", "Typ: Null", "Kommandutan", "Meteno", "Mimigma", "Sen-Long", "Moruda", "Tortunator", "Knirfish", "Leycrodon", "Lectragon", "Pescragon"
  , "Mopex", "Nigiragi", "Gierspenst", "PalTauros", "Heerashai"]
const cost6 = ["Lavados", "Arktos", "Entei", "Suicune", "Raikou", "Registeel", "Regirock", "Regice", "Darkrai", "Cresselia", "Shaymin", "Heatran", "Selfe", "Tobutz", "Vesprit", "Terrakium", "Meloetta", "Viridium", "Genesect", "Keldeo", "Volcanion", "Voltriant", "Kapu-Toro", "Anego", "Kaguron", "Muramura", "Kapu-Riki", "Schlingking", "Masskito", "Meltan", "Dakuma", "Zarude", "Polaross", "Chongjian", "Benesaru", "Beatori", "GalZapdos", "Kriechflügel", "Eisenfalter", "Eisenhand", "Boninu", "Eisenkrieger", "Donnersichel", "Flatterhaar", "Wutpilz", "Furienblitz", "Eisenhals", "Eisenhaupt", "Eisenbündel", "Eisendorn", "Eisenblatt", "Galar-Arktos", "Sandfell", "Zeraora", "Infamomo"]
const cost7 = ["Jirachi", "Diancie", "Deoxys", "Manaphy", "Latias", "Victini", "Demeteros", "Hoopa", "Magearna", "Katagami", "Venicro", "Marshadow", "Schabelle", "Cupidos", "Phantoross", "Ursaluna", "Ogerpon", "Kopplosio", "Yuyu"]
const cost8 = [ "Mewto", "Ho-Oh", "Palkia", "Dialga", "Kyurem", "Zekrom", "Zygarde", "Yveltal", "Necrozma", "Coronospa", "Zamazenta"]
const cost9 = ["Groudon", "Arceus"]
const pokemonTypes = ["Normal", "Feuer", "Wasser", "Elektro", "Pflanze", "Flug", "Käfer", "Gift", "Gestein", "Boden", "Kampf", "Eis", "Psycho", "Geist", "Drache", "Unlicht", "Stahl", "Fee"]
const costLists = {
    1: cost1,
    2: cost2,
    3: cost3,
    4: cost4,
    5: cost5,
    6: cost6,
    7: cost7,
    8: cost8,
    9: cost9
};


let pointCounter = 0;
let gotBonus = false;
let teamPokemon = []; // Array to store the current team's Pokemon objects

// --- Cookie functions ---
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for(let i = 0; i <cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function getCheckedPokemon() {
    const cookieValue = getCookie("checkedPokemon");
    return cookieValue ? cookieValue.split(',') : [];
}

function updateCheckedPokemonCookie(pokemonName, isChecked) {
    let checkedPokemon = getCheckedPokemon();
    if (isChecked) {
        if (!checkedPokemon.includes(pokemonName)) {
            checkedPokemon.push(pokemonName);
        }
    } else {
        checkedPokemon = checkedPokemon.filter(name => name !== pokemonName);
    }
    setCookie("checkedPokemon", checkedPokemon.join(','), 365); // Cookie expires in 365 days
}


function randomizer(max) {
  return Math.floor(Math.random() * max) + 1;
}

function pickItem(list) {
    let availablePokemon = list;
    const checkedPokemon = getCheckedPokemon();
    availablePokemon = availablePokemon.filter(pokemon => !checkedPokemon.includes(pokemon));

    if (availablePokemon.length === 0) {
        // If no Pokemon left in the list after filtering, return null or handle as needed.
        // For now, let's return a message, you might want to handle this differently.
        return null; // Or throw an error, or return a default Pokemon.
    }

  const randomIndex = randomizer(availablePokemon.length) - 1;
  return availablePokemon[randomIndex];
}


function replacePokemon(pokemonName, cost) {
    let newList = costLists[cost];
    let newPokemonName;
    do {
        newPokemonName = pickItem(newList);
        if (newPokemonName === null) {
            alert("Keine Pokemon mehr verfügbar mit diesen Kosten! Bitte lösche einige Checkmarks."); //Inform user and stop replacement
            return; // Exit the function if no pokemon is available
        }
    } while (newPokemonName === pokemonName); // Ensure we don't get the same Pokemon again immediately

    const pokemonIndex = teamPokemon.findIndex(p => p.name === pokemonName);
    if (pokemonIndex !== -1) {
        teamPokemon[pokemonIndex] = { name: newPokemonName, cost: cost }; // Update teamPokemon array

        // Update the displayed Pokemon list
        const pokemonElementLabel = document.querySelector(`#pokemon label[data-pokemon-name="${pokemonName}"]`);
        if (pokemonElementLabel) {
            pokemonElementLabel.setAttribute('data-pokemon-name', newPokemonName); // Update data attribute
            const checkbox = pokemonElementLabel.querySelector('input[type="checkbox"]');
            checkbox.value = newPokemonName; // Update checkbox value
            pokemonElementLabel.childNodes[2].textContent = `${newPokemonName} (${cost} Punkte)`; // Update text node (Pokemon name and points)
        }
    }
}


function handleCheckboxChange(event) {
    const checkbox = event.target;
    const pokemonName = checkbox.value;
    const isChecked = checkbox.checked;
    const pokemonLabel = checkbox.closest('label');
    const pokemonCost = parseInt(pokemonLabel.textContent.match(/\((\d+) Punkte\)/)[1]); //Extract cost from label text

    updateCheckedPokemonCookie(pokemonName, isChecked);

    if (isChecked) {
        replacePokemon(pokemonName, pokemonCost);
    }
}


function myFunction() {
  pointCounter = 0;
  gotBonus = false;
  teamPokemon = []; // Clear the team array for a new team
  document.getElementById("bonus").textContent = "";
  document.getElementById("pokemon").textContent = "Dein Team ist:"; //Clear previous content, set title
  document.getElementById("ersatz").textContent = "Wenn mehr als 10 Punkte, kannst du mit diesen Pokemon austauschen:";

  let pokemonHTML = "Dein Team ist:<br>"; // Initialize HTML string for pokemon display

  while (pointCounter < 10) {
    let firstPick = randomizer(33);
    let chosenItemName = null;
    let itemCost = 0;
    let currentCostList = [];


    if (firstPick >= 0 && firstPick <= 5) {
      itemCost = 3;
      currentCostList = cost3;
    } else if (firstPick >= 6 && firstPick <= 11) {
      itemCost = 2;
      currentCostList = cost2;
    } else if (firstPick >= 12 && firstPick <= 17) {
      itemCost = 1;
      currentCostList = cost1;
    } else if (firstPick >= 18 && firstPick <= 23) {
      itemCost = 4;
      currentCostList = cost4;
    } else if (firstPick >= 24 && firstPick <= 28) {
      itemCost = 5;
      currentCostList = cost5;
    } else if (firstPick === 29) {
      itemCost = 6;
      currentCostList = cost6;
    } else if (firstPick === 30) {
      itemCost = 8;
      currentCostList = cost8;
    } else if (firstPick === 31) {
      itemCost = 7;
      currentCostList = cost7;
    }  else if (firstPick === 32) {
      itemCost = 9;
      currentCostList = cost9;
    } else if(firstPick === 33 && gotBonus===false) {
      const chosenType = pickItem(pokemonTypes);
      const pokeGen = (Math.floor(Math.random() * 9)+1);
      const pokeGen2 = (Math.floor(Math.random() * 9)+1);
      if (pokeGen !== pokeGen2) {
        document.getElementById("bonus").textContent += "Bonus(optional): Ein " + chosenType + " Pokemon deiner Wahl (wenn möglich aus Generation " + pokeGen + " oder " + pokeGen2 + " sonst beliebig), muss mit einem Pokemon aus der Liste ausgetauscht werden, das die selben Kosten hat.";
        gotBonus = true;
      }
      itemCost = 0; // Bonus doesn't add to point count
    }

    if (itemCost > 0) {
        chosenItemName = pickItem(currentCostList);
        if (chosenItemName) { // Check if pickItem returned a Pokemon (not null)
            pointCounter += itemCost;
            teamPokemon.push({ name: chosenItemName, cost: itemCost }); // Add to teamPokemon array

            pokemonHTML += `<label data-pokemon-name="${chosenItemName}">
                               <input type="checkbox" value="${chosenItemName}" onchange="handleCheckboxChange(event)">
                               ${chosenItemName} (${itemCost} Punkte)
                            </label><br>`;
        } else {
            // Handle case where no Pokemon could be picked (e.g., all checked)
            console.warn("No Pokemon available for cost " + itemCost + ". Please uncheck some Pokemon.");
            break; // Stop generating the team as no more Pokemon are available for this cost.
        }
    }
  }

  document.getElementById("pokemon").innerHTML = pokemonHTML; // Set HTML content to display Pokemon with checkboxes

  document.getElementById("ersatz").textContent += pickItem(cost1) + " (1 Punkt) " + pickItem(cost2) + " (2 Punkte) " + pickItem(cost3) + " (3 Punkte)";
}


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
