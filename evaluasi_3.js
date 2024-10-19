// soal 1
for (let kata = 1; kata <= 20; kata++) {
    if (kata  %2 == 0 ) {
        console.log(kata + " - berkualitas")
    }else if (kata  %3 == 0 ) {
        console.log(kata +" - i love coding")
    }else {
        console.log(kata +" - santai")
    }
}


//soal 2
let nilai = [50, 90, 65, 67, 89, 80, 50, 97, 84];
// let [a,b, ...c] = nilai

// function ratarata(params) {
//     let angka = 0
    
//     for (let i = 0; i < params.length; i++) {
//         angka += params[i]
//     }
//     return angka / params.length
// }
//     console.log(ratarata(nilai))

let rataNilai = nilai.reduce((a, b) => a + b)
let hasilRata = rataNilai / 9

console.log(hasilRata)


//soal 3
function anagram(a, b) {
    return a.split("").sort().join() === b.split("").sort().join()
}
console.log(anagram("kasur", "rakua"))


//soal 4
for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10 ; b++) {
        if (b >= a && a + b <=10 ||b <= a && a + b >=10) {
            document.write("*") 
        }else{
            document.write("_")
        }  
    }
     document.write("<br>") 
 }


 //soal 5
 for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10 ; b++) {
        if (b <= a && a + b <= 10||b >= a && a + b >=10) {
            document.write("*") 
        }else{
            document.write("_")
        }  
    }
     document.write("<br>") 
 }

