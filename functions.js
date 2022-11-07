let jonSnowHealth = 100
// conv to string
/*
console.log(typeof jonSnowHealth)
jonSnowHealth =string(jonSnowHealth)
jonSnowHealth = toString(jonSnowHealth)
console.log(Boolean(jonSnowHealth))
// reasign js to get 100 out by parsing convert to no
jonSnowHealth = parseInt()
//con to a boolean
jonSnowHealth = Boolean(jonSnowHealth)
//con using string coercion/concatenation

//jonSnowHealth = jonSnowHealth + " health"
jonSnowHealth = jonSnowHealth + " health"
jonSnowHealth = 'health -' + jonSnowHealth

*/
console.log(jonSnowHealth)
let theWinnerIs ="jamie is the winner"
//let newWinnerIs = theWinnerIs.replace('jamie', 'Jon')
//put .toLowerCase incase anyone type wrong case lower/upper
let newWinnerIs = theWinnerIs.toLowerCase().replace('jamie', 'Jon')
//replace
let newWinner = theWinnerIs.toLowerCase().replace('us', 'spain')
//console.log(newWinner)
//includes
if (newWinner.includes("Jon")){ //it will check without console , this statemnt will evaluate to true or false, if true only then I replace 
console.log('replaced successfully')
}else{
    console.log('not replaced')
}
console.log(newWinner)
//???
//Q// Convert to kebab-case string Jon-is-the-winner
//let newWinnerReplace = newWinner.replaceAll('',"-")
//pblm sometimes with aj method 
/*
let newWinnerLower = newWinner.toLowerCase()
let newWinnerLowerSplit = newWinnerLower.split('')
let newWinnerKebab = newWinnerLower.join('-')
*/
let newWinnerKebab2 = newWinner.toLowerCase().split('').join("-")
console.log(newWinnerKebab)
//Functions
// isJonAlive() --it will work here to because fun is declaration so hoissted but if it is function expression it needs to be initiatized need tobe u- d, hoisted for global var and global funciton .
//Node takeall the global and hoist up  
fuction isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('j is alive')

    }else{
            console.log('Rip Js')
    }
}

/* missed arrow fun
isJonAlive()
 
 const isJonAlive = ( ) =>{

 }
 */
function surpriseAttack(attack){
    jonSnowHealth -= attack //(js =js- attack) same
}
surpriseAttack(20) // 20 is argument and attack parameter 
surpriseAttack(10)

console.log(jonSnowHealth)

/* dj sent
//convert to kebab-case eg. jon-is-the-winner
// let newWinnerReplace = newWinner.replaceAll(' ', '-')
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerLowerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerLowerSplit.join('-')

let newWinnerKebab = newWinner.toLowerCase().split(" ").join("-");

console.log(newWinnerKebab);
//functions
isJonAlive();

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log(`Jon is alive!`);
  } else {
    console.log(`RIP Jon Snow`);
  }
}

//function expression
// const isJonAlive = () => {
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//arrow-function
// const isJonAlive = function(){
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//create a function to launch attack on Jon

function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  //the same
  // jonSnowHealth = jonSnowHealth - attack
}

surpriseAttack(20);
surpriseAttack(10);
// let remainingPlusShield = surpriseAttack(18) + 50;

console.log(jonSnowHealth);
*/
/* //copied from chat
fun surpriseAttack(attack){
    return jonSnowHealth -= attack;

}
surpriseAttack(20)
let remainingPlusShield = surpriseAttack(18)+50;

// add the jon Alive inside fun
isJonAlive()
surpriseAttack(40)
*/ 
/*
//functions
isJonAlive();

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log(`Jon is alive!`);
  } else {
    console.log(`RIP Jon Snow`);
  }
}

//function expression
// const isJonAlive = () => {
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//arrow-function
// const isJonAlive = function(){
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//create a function to launch attack on Jon

function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  //the same
  // jonSnowHealth = jonSnowHealth - attack
}

surpriseAttack(20);
surpriseAttack(10);
// let remainingPlusShield = surpriseAttack(18) + 50;

console.log(jonSnowHealth);
*/
function surpriseAttack(attack){
    jonSnowHealth -= attack;
    isJonAlive()
}
surpriseAttack(20);
//let remaing atack
//multiple returns ?
function greeting(person1, person2){
    console.log(`${person1} and ${person2} are saying hello`)
}
greeting('ned',"pal")

//functions with return eg roll dice: possible roles in arr 1-6
//use math class from MDN   http:/dev mozilla Math.random gives no 0-1, has to be multiply by 10 so not go over 10/ * 100 to get 1-100 // want to be within 6 so *6. Math.floor round to bottom, ceil rounds up

 function rollDice(){
 let possibleRolls =[1,2,3,4,5,6] 
 let randomIndex = Math.floor(Math.random()* possibleRolls.length)
 return possibleRolls[randomIndex]
}
let firstRoll = rollDice() // call location so returned valuee from function is putin at whatever place fun is called .
console.log(firstRoll)
//math.random() has to be called so put ()

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll ------??

}

// you cant change let to var in function to make it global . It only work for loops change let to varl. 
//Consolelor(firstroll,seroll ) has to be inside function local scope.
// changing let to var work in only for loops or if loop not in functions.
