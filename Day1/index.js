var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split("\n");

var counter = 0;
var lastnum = 0;
input.forEach(a=>{
    var num = parseInt(a);
    if(num > lastnum && lastnum != 0)
        counter++;
    lastnum = num;
});
console.log("Part1: ",counter);
counter = 0;
var lastsum = 0;
for(var i = 0; i < input.length; i++){
    var sum = parseInt(input[i]) + parseInt(input[i+1]) + parseInt(input[i+2]);
    if(sum > lastsum && lastsum != 0)
        counter++;
    lastsum = sum;
};
console.log("Part2: ",counter);