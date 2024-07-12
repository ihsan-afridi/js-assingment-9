// JAVASCRIPT PRACTICE PROBLEMS

// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare

// var user = +prompt("give a number")
// for ( let i = 0 ; i <= 10; i++){
//     console.log(`${user} * ${i} = ${user * i}`);
// }



// 2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare
// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum); 

// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare
// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
const nums = [];

for (let i = 0; i < 5; i++) {
  const num = prompt(`Enter number ${i+1}:`);
  nums.push(Number(num));
}

console.log(nums); // Output: [num1, num2, num3, num4, num5]


// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem
// 5. FACTORIAL





// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24