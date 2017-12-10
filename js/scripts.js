function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2
    }
    else {
        console.log('Incorrect data')
    }
}


var triangle1Area = getTriangleArea(3, 12),
    triangle2Area = getTriangleArea(6, 10),
    triangle3Area = getTriangleArea(-3, 13);

    console.log(triangle1Area);
    console.log(triangle2Area);
    console.log(triangle3Area);
