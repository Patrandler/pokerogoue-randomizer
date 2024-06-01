const cost1 = ["Raupi", "Hornliu", "Rattfratz", "Paras"];
const cost2 = ["Taubsi", "Habitak", "Rettan", "Sandan", "Zubat", "Myrapla", "Bluzuk", "Enton", "Krabby", /*"Voltoball",*/ "Ditto"];
const cost3 = ["Bisasam", "Schiggy", "Glumanda", "Nidoran W", "Nidoran M", "Vulpix", "Digda", "Quapsel", "Abra", "Machollo", /*Knofensa*/ "Tentacha", /*"Kleinstein"*/, "Ponita", "Flegmon", "Magnetilo", "Jurob", "Sleima", "Nebulak", "Traumato", "Tragosso", "Smogon", "Rihorn", /*"Tangela"*/, "Goldini", /*"Amonitas"*/, /*"Kabuto"*/];
const cost4 = ["Pikachu", /*"Pipi"*/, "Pummeluff", "Mauzi", /*"Menki"*/, "Fukano", "Porenta", "Dodu", "Onix", /*"Owei"*/, "Seeper", /*"Sterndu"*/, /*"Pantimos"*/, "Rossana", "Pinsir", "Evoli", /*"Porygon"*/, "Dratini"];
const cost5 = [/*"Nockchan", "Kicklee", "Schlurp","Chaneira", "Kangama"*/, "Sichlor", /*"Elektek"*/, "Magmar", "Tauros", "Lapras", /*"Aerodactyl",*/ "Relaxo"]
const cost6 = [/*"Arktos", "Zapdos", "Lavados",*/ "Mew"]
const cost8 = ["Mewtwo"]


let pointCounter = 0;

function randomizer(max) {
  return Math.floor(Math.random() * max) + 1;
}

function pickItem(list) {
  const randomIndex = randomizer(list.length) - 1; // Adjust for zero-based indexing
  return list[randomIndex];
}

function myFunction() {

  while (pointCounter < 10) {

    let firstPick;
    do {
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
      );

    if (firstPick === 1) {
      pointCounter += 3;
      const chosenItem = pickItem(cost3);
      document.getElementById("pokemon").textContent += chosenItem + " (3 Punkte)";

    } else if (firstPick === 2) {
      const chosenItem = pickItem(cost2);
      document.getElementById("pokemon").textContent += chosenItem + " (2 Punkte)";
      pointCounter += 2;
    } else if (firstPick === 3) {
      const chosenItem = pickItem(cost1);
      document.getElementById("pokemon").textContent += chosenItem + " (1 Punkt)";
      pointCounter += 1;
    }
    else if (firstPick=== 4) {
      const chosenItem = pickItem(cost4);
      document.getElementById("pokemon").textContent += chosenItem + " (4 Punkt)";
      pointCounter += 4;
    }

    else if (firstPick === 5) {
      const chosenItem = pickItem(cost5);
      document.getElementById("pokemon").textContent += chosenItem + " (5 Punkt)";
      pointCounter += 5;
    }

    else if (firstPick === 6) {
      const chosenItem = pickItem(cost6);
      document.getElementById("pokemon").textContent += chosenItem + " (6 Punkt)";
      pointCounter += 6;
    }

    else if (firstPick === 7) {
      const chosenItem = pickItem(cost8);
      document.getElementById("pokemon").textContent += chosenItem + " (8 Punkt)";
      pointCounter += 8;
    }

    }
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


