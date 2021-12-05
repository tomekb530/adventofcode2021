var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split("\n");
var x = 0;
var y = 0;
var aim = 0;
input.forEach(cmd=>{
    cmd = cmd.split(" ");
    var dir = cmd[0];
    var dist = parseInt(cmd[1]);
    if(dir=="forward"){
        x+=dist;
    }
    if(dir=="up"){
        y-=dist;
    }
    if(dir=="down"){
        y+=dist;
    }
});
console.log("X:",x,"Y:",y);
console.log("Part 1 Result:",x*y);
x=0;
y=0;
input.forEach(cmd=>{
    cmd = cmd.split(" ");
    var dir = cmd[0];
    var dist = parseInt(cmd[1]);
    if(dir=="forward"){
        x+=dist;
        y+=aim*dist;
    }
    if(dir=="up"){
        aim-=dist;
    }
    if(dir=="down"){
        aim+=dist;
    }
});
console.log("X:",x,"Y:",y);
console.log("Part 2 Result:",x*y);