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