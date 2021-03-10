//CALLBACK
const mandi = () => {
    console.log("Mandi");
};
const sarapan = (callback) => {
    setTimeout(() => {
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000); 
};
const berangkatSekolah = () => {
    console.log("Berangkat Sekolah");
};

mandi();
sarapan(berangkatSekolah);

//PROMISE
function helloWorld()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000)
    });    
};
const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
};
messages();

//FETCH
const ambilDataUser = () =>
{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => console.log(users))
}

ambilDataUser();