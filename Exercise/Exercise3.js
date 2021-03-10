// 1. Class

// class Orang {
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }

//     bekerja(){
//          return `${this.nama} sedang bekerja seperti biasa`;
//     }
// }
// const user1 = new Orang("Cliford Mantow", 20);
// console.log(user1.bekerja());

// 2. Inheritance
class Orang {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    tidur(){
         return `${this.nama} sedang tidur`;
    }

    makan(){
        return `${this.nama} sedang makan`;
    }
}

class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    
    belajar(){
        return `${this.nama} belajar di ${this.namaSekolah}`
    }
}

const user = new Pelajar("John", 17, "Unklab");
console.log(user.belajar());