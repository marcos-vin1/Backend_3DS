setTimeout(function(){
    console.log('Era uma vez...')
}, 3000)
let v = 1
setInterval(function(){
    console.log(`Rodou ${v} vez(s)`)
    v = v + 1
}, 1000)