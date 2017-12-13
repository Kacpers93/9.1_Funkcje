function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2
    }
    else {
        return 'Incorrect data'
    }
};



var triangle1Area = getTriangleArea(3, 12);
var triangle2Area = getTriangleArea(6, 10);
var triangle3Area = getTriangleArea(-3, 13);

console.log(triangle1Area);
console.log(triangle2Area);
//console.log(triangle3Area);
console.log('the value is: ' + triangle3Area);