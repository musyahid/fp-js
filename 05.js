const row = Array.from(Array(1000).keys())

var even    = [];
var odd     = [];

row.sort(function(c,d) {
    if ((c & 1) < (d & 1)) {
        even.push(c);
    }else {
        odd.push(c)
    }
});



console.log(`Even `+ even)
console.log(`Odd `+ odd)

