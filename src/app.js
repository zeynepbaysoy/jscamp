console.log("Merhaba Kodlama.io")
//değişken tanımlamak için var yerine let kullanırız.
//Js type safe değildir

let dolarDun=9.20
let dolarBugun=9.30
{
    let dolarDun
}
console.log(dolarDun)
const euroDun=11.2
//euroDun=11
console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri=["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi","Özel Konut Kredileri"]
//let konutKredileri=[12,"Emlak Konut Kredis", ["a", "b","c"]]--- json verisi gibi
console.log("<ul>")
for(let i=0; i<konutKredileri.length;i++)
{
console.log("<li>"+ konutKredileri[i]+"</li>")
}
console.log("</ul>")
console.log(konutKredileri)