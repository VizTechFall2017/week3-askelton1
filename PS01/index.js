var svg = d3.select('svg');

/*var array = [ "milk", "eggs", "bread", "butter"];

console.log(array[0]);

var student = {"name":"abby", "job": "student", "age": "24"};

console.log(student.age);

var classRoom = [
    {"name":"abby", "job": "student", "age": "24"},
    {"name":"abby", "job": "student", "age": "24"},
    {"name":"abby", "job": "student", "age": "24"}
];

console.log(classRoom);

console.log( classRoom[1]);*/

myCircle = {"cx": 100, "cy": 200, 'r': 20, 'color':'pink'} ;

myArray = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

for (i=0; i < 25; i++) {

    console.log("circle" +i);

    myArray[i].name = "circle" + i;

    myArray[i].cx = Math.random(i) * 500;
    myArray[i].cy = Math.random(i) * 500;
    myArray[i].r = Math.random(i) * 20;
}
svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        console.log(d.cx);
        return d.cx;
    })
    .attr('cy', function(d) {
        return d.cy;
    })
    .attr('r', function(d){
        return d.r;
    })
    .attr('fill', function(d) {
        return d.color;
    });

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





