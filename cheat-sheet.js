console.log("Merhaba bu JavaScript ve Node.js ile ilgili oluşturduğum temel bilgilerden oluşan bir dosyadır.")

// dosyayı çalıştırma -> $node <dosya_adi>

var isim = "Göksenin"

console.log("Merhaba ben", isim)

if(isim == "Ayşe"){
    console.log("Bu kişi Ayşe değil.")
}
else if(isim == "Göksenin"){
    console.log("Doğru bildiniz.")
}
else{
    console.log("Hiçbiri.")
}

var func = function(){
    console.log("Bu bir fonksiyon.")
}

func()

//calback fonksiyonlar -> bir fonksiyonu diğer bir fonksiyona parametre olarak vermek istediğimizde callback fonksiyonu kullanırız.
//Nodejs asenkron bir yapıda olduğundan dolayı A fonksiyonunu B fonksiyonundan sonra çalıştırmak istediğimiz durumlarda işimize yarar.

var a = function(callback){
    console.log("A fonksiyonu.")
    callback()
}

var b = function(){
    console.log("B fonksiyonu.")
}

a(b)

for (var i=0; i<10; i++){
    console.log(++i)
}

//Nesneler 
var o1 = new Object();
var o2 = {}

var insan = {
    isim: "Göksenin",
    yas: "26",
    fnk: function(){
        console.log("yürüyor.")
    }
}

insan.boy = 163
console.log(insan)
console.log(insan.fnk())

//var - let farkı: var, scope karmaşasına yol açabilir; bu yüzden let kullanılır. Kısacası kod karışıklığını engeller.

//template literal -> `${degisken}`
let name  = "Göksenin"
console.log(`Benim adim ${name}`)

//Destructing -> tek tek key'leri almak yerine istediklerimizi aynı anda çekmek için destructing yöntemi kullanırız.
// Key isimleri ile çektiğimiz isimler aynı olmalı.
let degerler = {
    d1 : "Deger1",
    d2 : "Deger2",
    d3 : "Deger3"
}

let {d1, d2} = degerler
console.log(d1, d2)

//spread operator -> dizinin tüm elemanlarını yazdırmada kullanılır. (...array)

let array = [1, 2, 3]
console.log(...array)

//rest operator -> geri kalan indislerdeki değerleri yazdırır. (...rest)

let [deger1, ...rest] = array
console.log(rest)
console.log(...rest)

//Promise yapısı -> callback hell karmaşasından kurtulmaya yarayan yöntem.
//Parametre olarak, resolve ve reject parametreli bir fonksiyon alır. Daha sonra çağırıldığında .then(func(resolve_data)) ve .catch(func(reject_data)) kullanılarak veri karmaşası önlenmiş olur.
//İlk kullanımdan sonraki .then() in aldığı parametre bir öncekinin return ettiği veridir.

let asenkfonk = (sayi) => {
    return new Promise((resolve, reject) => {
        if(sayi === 5)
            resolve("Sayi kabul edildi.")
        else
            reject("Sayi reddedildi.")
    })
}

asenkfonk(5)
    .then((data) =>{
        console.log(data)
        return 1
    })
    .then((data) => {
        console.log(data)
        return 2
    })
    .catch((error) =>{
        console.log(error)
    })

    //async - await yapısı -> callback hell ve promise chain yöntemleriyle aynı işlevdedir. Fonksiyonun içindeki her satır sırayla ilerler.
    //async - await kullanırken hata yakalamak(reject) için try catch kullanılır.
    
    let user = {id: 1, name: "ayşe"}
    let friends = [{id: 2, name: "fatma"}, {id: 3, name: "hayriye"}]

    const getUser = () =>{
        return new Promise((resolve, reject) =>{
            setTimeout((
                resolve(user)
            ),5000)
        })
    }

    const getFriends = (userId) =>{
        return new Promise((resolve, reject) =>{
            setTimeout((
                resolve(friends)
            ), 6000)
        })
    }

    const asenkronakis = async function() {
        console.log("Get user")
        let user = await getUser()
        console.log(user)
        console.log("User done.")

        console.log("Get friends")
        let friends = await getFriends(user.id)
        console.log(friends)
        console.log("Friends done.")

    }

asenkronakis()
