//Ecma Script 6

// const numbers = [1, 2, 3, 4]; bisa di modifikasi 
// numbers.push(5);
// console.log(numbers);

//implicit return value
// const ucapkanSalam = (salam) => salam + ` Clifford`;
// const penjumlahan = (a, b) => a + b;

// console.log(penjumlahan(3,4));
// console.log(ucapkanSalam("Selamat Sore"));

// //Default param value
// const ucapkanSalam = (nama, umur = '3') => `${nama} ${umur}`;
// console.log(ucapkanSalam("clifford, umur"));

//Spread Operator
// rest parameter = ...numbers
// const penjumlahanAngka = (params1, ...numbers) =>{ //numbers akan berupa array
//     let result = 0;
//     numbers.forEach((item) => {
//         result = result + item;
//     })
//     console.log(`${params1} aku params1`);

//     return result;
// }
// console.log(penjumlahanAngka(1,2,3));

// const arrBil = [1,2,4];
// console.log(...arrBil);

//copy nilai array
// const numbers = [1,2,3];
// const numbers2 = [...numbers];

// //concat array
// const numbers1 = [1,2,3];
// const numbers2 = [4,5,6]; 
// const output = [...numbers1, "tengah", ...numbers2];
// console.log(output);

// //memodifikasi object
// let orang = {
//     nama: "Clifford",
//     umur: 4,
// }
// orang = {
//     ...orang,
//     pekerjaan: "freelancer",
//     bahasa: "Indonesia",
// }

// console.log(orang);

