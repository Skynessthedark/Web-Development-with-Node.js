let fs = require('fs')
let video = "video.mp4"

const readStream = fs.createReadStream(video)

readStream.on('data', (chunk)=>{
    console.log("Chunk!")
})