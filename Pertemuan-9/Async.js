// //Callback
// console.log("1");
// const testCallback = (firstName, lastName, callback) => {
//     const fullName = `Hallo ${firstName} ${lastName}`;
//     callback(fullName);
// }

// testCallback("Clifford", "Mantow", fullName => {
//     console.log(`Hi, ${fullName}`);
// }); 

// Set Timeout
// console.log("Ini satu");
// setTimeout(() => {
//     console.log("Ini dua");
// }, 2000)
// console.log("Ini tiga");

// proses1 = () => {
//     console.log("Satu...");
// }
// proses2 = (callback) => {
//     setTimeout(() => {
//         console.log("Dua...");
//         callback();
//     }, 2000)
// }
// proses3 = () => {
//     console.log("Tiga...");
// }
// proses1();
// proses2(proses3);

//Promise
// let condition = false;

// let testCliff = new Promise((resolve, reject) => {
//     if(condition){
//         resolve("Berhasil");
//     }else{
//         reject("Tidak Berhasil");
//     }
// });

// testCliff.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


// //Async Await
// let condition = false;

// let testCliff = new Promise((resolve, reject) => {
//     if(condition){
//         resolve("Berhasil");
//     }else{
//         reject("Tidak Berhasil");
//     }
// });

// const iniAsyncAwait = async () => {
//     try{
//         const berhasil = await testCliff;
//         console.log(berhasil);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// iniAsyncAwait();

const getJSON = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const json = await res.json();
        console.log(json);
        const {name, email, company:{name: compname}} = json;
        
        
        document.querySelector(".Nama").textContent = `${name}`;
        document.querySelector(".ID").textContent = `${email}`;
        document.querySelector(".email").textContent = `${compname}`; // kita menggunakan alias karena sama namanya dengan name yang diatas
    }
    catch(error)
    {
        console.log(error)
    }
}

getJSON();