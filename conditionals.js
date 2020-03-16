var speed=3;
var tirePressure=4;
var monkey=Math.floor(Math.random()*Math.floor(10));
var johnathan = Math.floor(Math.random() * Math.floor(10));
console.log("monkey is "+monkey+ "and johnathan is "+johnathan);
if(speed<10)
{
  console.log("I pulled you over because you were going too slow");
} else if(speed>50)
{
  console.log("I pulled you over for going to fast");
}
if(tirePressure<10){
  console.log("I pulled you over because you are driving with a flat tire")
}
if(monkey < 6){
  console.log("Hello");
} else if(monkey >= 6){
  console.log("goodbye");
}
if(monkey < 3){
  console.log("cats");
}else{
  console.log("goats");
}

if(monkey < 9){
  console.log("almonds");
} else
{
  console.log("jelly");
}

if(monkey <= 6 && johnathan < 5){
  console.log("dollars");
}
else if (monkey==3 && johnathan<5)
{console.log("submarine");
}
else if(monkey > 7 && johnathan < 3){
  console.log("godzilla");
}
if(monkey <= 6 && johnathan < 5 && johnathan !== 3){
  console.log("halifax");
}
if(monkey < 3)
{console.log("electric");
} else if(monkey === 5){
  console.log("camper van");
}
if(monkey > 3){
  console.log("toes");
}else if(monkey === 1){
  console.log("shoelace");
}
if(monkey > 9){
  console.log("curry");
} else
  if (monkey === 4){
    console.log("future");
  } else {
    console.log("orchid");
  }
if(monkey < 6 || johnathan < 3){
  console.log("danube");
} else if (monkey > 7 || johnathan === 9){
  console.log("trumpet");
} else
{
  console.log("brains");
}

// pair code

var speed = 5;

if ( speed < 10) {
  console.log("I pulled you over because you were going too slow");
} else if (speed > 50) {
  console.log("I pulled you over for going too fast");
}

var tyrePressure = 5;

if (tyrePressure < 10) {
  console.log("I pulled you over for driving with a flat tyre");
}

var monkey = Math.floor(Math.random() * 10);

if (monkey < 6) {
  console.log("Hello");
}
console.log("Chocolate");

if (monkey >= 6) {
  console.log("Goodbye");
}
console.log("Chocolate");

if (monkey < 3) {
  console.log("Cats");
} else {
  console.log("Goats");
}
console.log("Chocolate");

if (monkey < 9) {
  console.log("Almonds");
} else {
  console.log("Jelly");
}
console.log("Chocolate");

var jonathan = Math.floor(Math.random() * 10);

if (monkey <= 6 && jonathan < 5) {
  console.log("dollars");
}
console.log("Chocolate");

if (monkey === 3 && jonathan < 5) {
  console.log("dogs");
} else {
  console.log("submarine");
}
console.log("Chocolate");

if (monkey > 7 || jonathan < 3 ) {
  console.log("puppies");
} else {
  console.log("godzilla");
}
console.log("Chocolate");

if (monkey <= 3 && jonathan < 5 && jonathan !== 3) {
  console.log("halifax");
}
console.log("Chocolate");

if (monkey < 3) {
  console.log("electric");
} else if (monkey === 5) {
  console.log("campervan");
}
console.log("Chocolate");

if (monkey > 3) {
  console.log("toes");
} else if (monkey === 1) {
  console.log("shoelace");
}
console.log("Chocolate");

if (monkey > 9) {
  console.log("curry");
} else if (monkey === 4) {
  console.log("future");
} else {
  console.log("orchid");
}
console.log("Chocolate");

if (monkey < 6 || jonathan < 3) {
  console.log("danube");
} else if (monkey > 7 && jonathan === 9) {
  console.log("trumpet");
} else {
  console.log("brains");
}
console.log("Chocolate");