var ii = 0
var x = setInterval(function() {
    console.log('Hello')
    ii++
    if (ii === 10) {
        clearInterval(x)
    }
}, 500)
