

//Iteration 0: First test

//Let's have a look at the first test case together to get you started.

//The first test case says that "_Soldier class >> should receive 2 arguments (health & strength)_", so we have to write the correct code to pass this test. Let's make the `Soldier` class receive two arguments:

//```javascript
// Soldier
//class Soldier {
//  constructor(health, strength) {}
//}

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }   

//let Ragnar = new Soldier(10000,100);
//let Odin = new Soldier(100000,10000);
//console.log("Ragnar", Ragnar); 
//console.log("Ragnar", Ragnar); 
//console.log("Ragnar's strength:", Ragnar.attack())
//console.log("Odin's strength", Odin.attack())

//#### `attack()` method

attack() {
return this.strength; 
}

//#### `receiveDamage()` method

receiveDamage(damage) {
    this.health = this.health -= damage;
} 
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
     super(health, strength);
     this.name = name; 
    }
    
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`; 
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry () {
        return "Odin Owns You ALL!"
    }
}

// Saxon

class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return 'A Saxon has received ${damage} points of damage'; 
        } else {
            return `A Saxon has died in combat`
        }
    } 
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

vikingAttack() {
    let randomSaxonNumber = math.floor(math.random()*this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonNumber];
    let randomVikingNumber = Marth.floor(Math.random()*this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingNumber];
    let result = randomSaxon.receiveDamage(randomViking.strength);
    
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonNumber, 1);
    }

    return result
}

SaxonAttack() {
    let randomSaxonNumber = math.floor(math.random()*this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonNumber];
    let randomVikingNumber = Marth.floor(Math.random()*this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingNumber];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    
    if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingNumber, 1);
    }

    return result
}

showStatus () {

if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!"; 
}

else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survived another day..";
}

else {
    return "Vikings and Saxons are still in the thick of battle.";
}

}

}

//### Iteration 1: Soldier
//Modify the `Soldier` class and add 2 methods to it: `attack()`, and `receiveDamage()`.
// Soldier