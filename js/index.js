// Iteration 1: Names and Input
const hacker1 = 'Rosana';
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Fulano';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let driversNameUpper = '';
for (let i = 0; i < hacker1.length; i++) {
 const letter = hacker1[i].toUpperCase();
  driversNameUpper += `${letter} `
}
console.log(driversNameUpper);

// console.log(hacker1.toUpperCase().split("").join(" "));

let reverse = "";
for (let i = hacker2.length-1; i >= 0; i --) {
  const navigatorReversed = hacker2[i];
  reverse += `${navigatorReversed}`
}
console.log(reverse);

// console.log(hacker2.split("").reverse().join(""))

if(hacker1[0] > hacker2[0]){
  console.log("The driver's name goes first.")
} else if(hacker1[0] < hacker2[0]) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}

//BONUS

const lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a magna dui. Nullam sed arcu ac erat scelerisque porttitor quis nec purus. Mauris consectetur mi in sapien consectetur dictum. Vestibulum nec volutpat arcu. Nam sagittis pulvinar velit non interdum. Sed gravida maximus aliquam. Proin fringilla, nibh ut ultrices vehicula, magna nunc lacinia turpis, vitae aliquam justo dui nec risus. Fusce vel lobortis libero. Nulla ultricies mauris at ullamcorper ultrices. Quisque id eleifend mauris. Donec vel risus volutpat, commodo quam eu, molestie dolor. In venenatis, ex eu mollis lobortis, felis nibh luctus nisl, in consequat felis ante sit amet elit. Morbi luctus varius lorem. Cras congue ex quis ex mattis lacinia. Mauris ac rhoncus urna. Maecenas ut purus ac orci placerat sagittis. Nam lobortis ac tellus sed aliquet. Fusce sodales libero a orci auctor tempor. Sed nec consequat orci, vel vulputate mauris. Donec at elit quam. Curabitur aliquam leo iaculis massa tristique dapibus. In rhoncus lectus tellus, a euismod ante sollicitudin nec. Duis hendrerit auctor nunc. Nam pretium elit et posuere volutpat. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas rutrum interdum sapien hendrerit euismod. Phasellus pretium dictum cursus. Mauris consectetur sem eu felis faucibus facilisis. Curabitur vel facilisis mauris, in sodales justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer massa sapien, vehicula sed sagittis sit amet, elementum sit amet elit. Fusce aliquet lacus dolor, in tempus orci accumsan id. Fusce porttitor mauris nec justo feugiat, vitae convallis massa faucibus.";

let totalWords = lorenIpsum.split(" ").length;

console.log(totalWords)

 let totalEt = 0;

const wordsArr = lorenIpsum.split(" ");

const et = ["et", "et.", "et,"]
for (let word of wordsArr) {
  if (et.includes(word)) {
    totalEt++
  }
}
console.log(totalEt)

//BONUS 2
const phraseToCheck = "amor, roma";

const spacellesPhrase = phraseToCheck.split(" ").join("");
let reversedPhrase = "";
for (let i = spacellesPhrase.length-1; i >= 0 ; i--){
  const reverse = spacellesPhrase[i];
  reversedPhrase += reverse

}

const isAPalindrome = reversedPhrase === spacellesPhrase;
if (isAPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome`)
} else {
  console.log(`"${phraseToCheck}" is not a palindrome`)
}

console.log(isAPalindrome);
