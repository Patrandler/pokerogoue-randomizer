const cost3 = ["Bisasam", "Schiggy", "Glumanda"];
const cost2 = ["Hornliu", "Taubsi", "Rattfratz"];
const cost1 = ["1kosten Pokemon"];
const cost4 = ["Riolu"];




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


