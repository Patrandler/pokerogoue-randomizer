const cost1 = ["Raupi", "Hornliu", "Rattfratz", "Paras"];
const cost2 = ["Taubsi", "Habitak", "Rettan", "Sandan", "Zubat", "Myrapla", "Bluzuk", "Enton", "Krabby", "Voltoball", "Ditto"];
const cost3 = ["Bisasam", "Schiggy", "Glumanda", "Nidoran W", "Nidoran M", "Vulpix", "Digda", "Quapsel", "Abra", "Machollo", "Tentacha", "Kleinstein", "Ponita", "Flegmon", "Magnetilo", "Jurob", "Sleima", "Nebulak", "Traumato", "Tragosso", "Smogon", "Rihorn", "Tangela", "Goldini", "Amonitas", "Kabuto"];
const cost4 = ["Pikachu", "Pipi", "Pummeluff", "Mauzi", "Menki", "Fukano", "Porenta", "Dodu", "Onix", "Owei", "Seeper", "Sterndu", "Pantimos", "Rossana", "Pinsir", "Evoli", "Porygon", "Dratini"];




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

    const firstPick = randomizer(5);
    console.log(firstPick);

    if (firstPick === 1) {
      const chosenItem = pickItem(cost3);
      document.getElementById("pokemon").textContent += chosenItem + " (3 Punkte)";
      pointCounter += 3;
    } else if (firstPick === 2) {
      const chosenItem = pickItem(cost2);
      document.getElementById("pokemon").textContent += chosenItem + " (2 Punkte)";
      pointCounter += 2;
    } else if (firstPick === 3) {
      const chosenItem = pickItem(cost1);
      document.getElementById("pokemon").textContent += chosenItem + " (1 Punkt)";
      pointCounter += 2;
    }
    else if (firstPick=== 4) {
      const chosenItem = pickItem(cost4);
      document.getElementById("pokemon").textContent += chosenItem + " (4 Punkt)";
      pointCounter += 4;
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


