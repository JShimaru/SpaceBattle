//declare global arrays to store important values
let damageHistory = ["Initialized: protocol.1"];
let battlefield = [{hull:2,firepower:2,accuracy:.5}];
//Value for enemy hull
let alienHull = battlefield[0].hull;
//last attack calculation function
let lastAttack;
//console.log(lastAttack)
function DueDamage(){
    let identify = damageHistory.splice(-1);
    //console.log(identify)
    let damageOf = identify[0].split("");
    //console.log(damageOf)
    lastAttack = damageOf.pop();
    //console.log(lastAttack)
    return lastAttack
}
//DueDamage();
const damageDone = alienHull - lastAttack;
//console.log(damageDone)
//Create the player object
const player = {
    shipName : 'USS HelloWorld',
    myHull : 20,
    firePower : 5,
    myAccuracy: .7,

 attack(){
    if(Math.random()<this.myAccuracy){
        damageHistory.push(`player: ${this.firePower}`) //Damage Dealt String
        destroyed = damageDone;
        if(destroyed <= 0){ 
            return (this.runAway)
        }else{
            return (`It's a hit! ${this.firePower} to enemy!`)
    }
    }else{
    console.log(`Missed!`)
    }
 },

 runAway(destroyed){
    if(destroyed <= 0){
    console.log(`Battle History: ${damageHistory}`)
    damageHistory.length = 0;
    //console.log(damageHistory)
    if(battlefield.shift() === undefined){ //win condition check
        return `All enemies defeated! You Win!`
    }else{
        UpdateEnemy();
        return `${battlefield.shift()} Destroyed! Continue fighting or escape?`
    }
 }
}
}
//Value for player hull after attack
const ouch = player.myHull - lastAttack;
//Create Alien Ship class
class AlienShip {
    constructor(){
        this.hull = Math.floor(Math.random() * (6-3)+3),
        //console.log(hull);
        this.firepower = Math.floor(Math.random() * (4-2)+2),
        //console.log(firePower)
        this.accuracy = Math.random() * (.8-.6)+.6
        //console.log(accuracy)
    }
  
  attack(){
    if(Math.random()<this.accuracy){
      damageHistory.push(`enemy: ${this.firepower}`) //Damage Dealt String
      let rHealth = ouch;
      
      if(rHealth <= 0){ //Loss Condition Check
         return (`Hull Breached!\n**GAME||OVER**`)
        }else{
         return (`We're hit! ${this.firepower} damage to USS HelloWorld! ${rHealth} hull remaining!`)
        }
      }else{
         console.log(`Nice moves! It's a Miss!`)
     }
    }
}
//Create maximum spawnable enemies
const enemy0 = new AlienShip();
const enemy1 = new AlienShip();
const enemy2 = new AlienShip();
const enemy3 = new AlienShip();
const enemy4 = new AlienShip();
const enemy5 = new AlienShip();
const enemy6 = new AlienShip();
const enemy7 = new AlienShip();
const enemy8 = new AlienShip();
const enemy9 = new AlienShip();
const enemy10 = new AlienShip();
const enemy11 = new AlienShip();
//Create array to store list of enemies
const enemies = [enemy0,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11];

//Spawn Enemies Function
function Spawn (){
    let loadEnemies = Math.ceil(Math.random() * (12-5)+5);
    battlefield.shift();
    //console.log(loadEnemies);    
    for(i=0;i<loadEnemies;i++){
        battlefield.push(enemies[i]);
    }
 //console.log(battlefield)
 alienHull = battlefield[0].hull;
 //console.log(alienHull)
 return `${battlefield.length} enemy ships have invaded our air space!`
}
//Console.log(Spawn())
//Update Function to change from current enemy
function UpdateEnemy(){
    battlefield.shift()
    alienHull = battlefield[0].hull;
}

//Fight function that intiates game/round
function Fight(){
    let round = 0;

    Spawn();
    player.attack();
    enemies[round].attack();

    if(damageHistory != 0){
        player.attack();
        enemies[round].attack()
    }else{
    round++;
    return `The next ship approaches, are you ready?`
    }
  return `Prepare to return to combat: Click again!`
}

Fight();