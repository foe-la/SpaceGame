// const playfield = document.querySelector(".playfield");

// for (let i = 0; i < 225; i++) {
//     const fleet = document.querySelector('div')
//     grid.appendChild(fleet);
// }

// const alienInvaders = [
//     0,1,2,3,4,5,6,7,8,9,
//     15,16,17,18,19,20,21,22,23,24,
//     30,31,32,33,34,35,36,37,38,39
// ]

// function attack() {
//     for (let i=0; i < alienInvaders.length; i++) {
//         fleet[alienInvaders[i]. classList.add('invader')]
//     }
// }

// attack()


class Ship {
    constructor(player, hull, firepower, accuracy) {
      this.player = player;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
    attack(alienInvaders) {
      if (Math.random() > this.accuracy) {
        console.log(`${this.player} missed`);
      } else {
        enemy.hull -= this.firepower;
        console.log(`${this.player} dealt ${this.firepower} hit.`);
        if (alienInvaders.hull <= 0) {
          console.log(`${alienInvaders.player} destroyed!`);
        }
      }
    }
  }
  
  // Create USS Assembly ship with pre-determined parameters
  let USSA = new Ship("USS Assembly", 20, 5, 0.7);
  
  // Create an array to hold 6 alien ships with randomly generated parameter values
  let alienFleet = [];
  
  // Create a for loop to create 6 alien ship objects and push them into the array
  const fleet = document.querySelector(".fleet")
  for (let i = 0; i < 200; i++) {
    alienFleet[i] = new Ship(
      `Alien Ship ${i + 1}`,
      Math.floor(Math.random() * (7 - 3) + 3),
      Math.floor(Math.random() * (5 - 2) + 2),
      Math.random() * (0.8 - 0.6) + 0.6
    );
  }
  
  function reset() {
    // Reset the game by creating a new player and alien fleet
    USSA = new Ship("USS Assembly", 20, 5, 0.7);
    alienFleet = [];
    for (let i = 0; i < 6; i++) {
      alienFleet[i] = new Ship(
        `Alien Ship ${i + 1}`,
        Math.floor(Math.random() * (7 - 3) + 3),
        Math.floor(Math.random() * (5 - 2) + 2),
        Math.random() * (0.8 - 0.6) + 0.6
      );
    }
  }
  
  // Add event listeners to attack and retreat buttons
  document.getElementById("attack").addEventListener("keyup", function () {
    if (USSA.hull > 0 && alienFleet.length > 0) {
      USSA.attack(alienFleet[0]);
  
      if (alienFleet[0].hull <= 0) {
        alienFleet.shift();
        console.log(`Alien Ships left: ${alienFleet.length}`);
      } else {
        alienFleet[0].attack(USSA);
        if (USSA.hull <= 0) {
          console.log("USS Assembly destroyed!");
        }
      }
    }
  });
  
  document.getElementById("retreat").addEventListener("click", function());
    console.log("Player retreated!");
    