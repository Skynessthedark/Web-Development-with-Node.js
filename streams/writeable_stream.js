let fs = require('fs')

const readStream = fs.createReadStream("video.mp4")
const writeStream = fs.createWriteStream("new.mp4")

readStream.on('data', (chunk)=>{
    console.log("Chunk!")
})

readStream.pipe(writeStream)
writeStream.on('finish', ()=>{
    console.log("yeni dosya oluşturuldu.")
})