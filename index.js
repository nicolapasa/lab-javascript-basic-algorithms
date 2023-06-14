// Iteration 1: Names and Input
const hacker1='Nicola'
console.log(`The driver's name is ${ hacker1}`)
const hacker2='Joaquin'
console.log(`The navigator's name is ${ hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length<hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
let upperName=""
// Iteration 3: Loops
for(char of hacker1){
    upperName +=" " +char.toUpperCase() + " "
  }
  console.log(upperName)
  for(i= hacker2.length-1; i>=0; i--){
    console.log( hacker2[i])
  }


var flag = false;

for (var i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    flag = true;
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log("Yo, the navigator goes first, definitely.");
    flag = true;
    break;
  } 
}

if (!flag && hacker1.length < hacker2.length) {
  console.log("The driver's name goes first.");
} else if (!flag && hacker1.length > hacker2.length) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (!flag && hacker1.length === hacker2.length) {
  console.log("What?! You both have the same name?");
}

//bonus 1
let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu ipsum, congue eu enim ut, facilisis sodales enim. Morbi eleifend velit sed ipsum sodales, in fermentum magna rhoncus. Maecenas ut lacus massa. Suspendisse non magna id mi semper tristique ut at purus. In lacus leo, consequat eu dui vitae, porta ultricies neque. Vivamus lobortis sit amet nibh sed porttitor. Suspendisse ut quam sit amet nunc fringilla mollis. Sed placerat a ante non pellentesque. Sed faucibus pretium erat, at facilisis risus venenatis vitae.

Praesent auctor accumsan massa in suscipit. Pellentesque tristique tempus tellus eget fringilla. Mauris eget molestie nisl. In pharetra, ipsum sed fringilla lacinia, orci ipsum elementum lectus, a pharetra libero neque nec ante. Quisque non porta sapien, eget lacinia lacus. Integer porttitor diam nec placerat volutpat. Sed et bibendum arcu, a faucibus elit. Phasellus molestie quis erat a placerat. Ut dapibus nunc justo. Aenean libero nulla, dapibus vitae felis id, iaculis viverra metus. Curabitur at fermentum lacus. Cras ornare, ipsum vel porta laoreet, tortor elit sagittis tellus, nec rutrum velit nulla quis erat. Fusce porta posuere massa, non pulvinar lectus dapibus at. Praesent sit amet tortor non neque tempus convallis et vitae neque. Maecenas volutpat tempor eros, vitae mollis enim. Integer cursus, dui ut finibus condimentum, nisi tortor egestas elit, nec pretium mi odio et dolor.

Suspendisse potenti. Duis sem augue, interdum vitae sollicitudin ut, pellentesque eu orci. Curabitur tincidunt ex a turpis porta sollicitudin. Proin consequat dolor a tempor dictum. Proin elementum sapien sed metus egestas, eget malesuada nunc malesuada. Etiam porta eu eros quis dictum. Donec erat ipsum, vulputate eu metus id, consequat malesuada dui. Vestibulum id facilisis lorem.`

var words = longText.split(" ");
var numWords = words.length;

console.log("The number of words in the string is: " + numWords);


var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    count++;
  }
}
console.log("the word ET compare: " + count + " times");

//bonus 2

let phraseToCheck='step on no pets'
let checkPalindrom=''
for(i=phraseToCheck.length-1; i>=0; i--){
    checkPalindrom += phraseToCheck[i]
}

console.log(checkPalindrom)
if(checkPalindrom==phraseToCheck){
    console.log("it is palindrom")

}
else{
    console.log("is not palindrom")
}