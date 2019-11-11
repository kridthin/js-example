var ii = 0
var x = setInterval(function() {
    console.log('Hello')
    ii++
    if (ii === 3) {
        clearInterval(x)
    }
}, 1000)
