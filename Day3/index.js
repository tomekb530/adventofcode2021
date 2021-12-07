var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split("\n");
//determine highest length of number from first input and loop with that
var num0 = 0;
var num1 = 0;
var finalgamma = "";
var finalepsilon = "";
for(var i = 0; i < input[0].length; i++) {
    input.forEach(bits=>{
        var bit = bits[i];
        if(bit == "0") {
            num0++;
        } else if(bit == "1") {
            num1++;
        }
    });
    if (num0 > num1) {
        finalgamma += "0";
        finalepsilon += "1";
    } else {
        finalgamma += "1";
        finalepsilon += "0";
    }
    num0 = 0;
    num1 = 0;
}
console.log("Gamma:",finalgamma);
console.log("Epsilon:",finalepsilon);
// to decimal
var decgamma = parseInt(finalgamma,2);
var decepsilon = parseInt(finalepsilon,2);
console.log("Decimal Gamma:",decgamma);
console.log("Decimal Epsilon:",decepsilon);
console.log("Multiplied:",decgamma*decepsilon);
//part2
num0 = 0;
num1 = 0;
var currentnums = input;
var currentnums0 = input;
var nums1 = [];
var nums0 = [];
var numsc1 = [];
var numsc0 = [];
function findMyNumO2(data,pos){
    //console.log(data,pos);
    data.forEach(bits=>{
        var bit = bits[pos];
        if(bit == "0") {
            num0++;
            nums0.push(bits);
        } else if(bit == "1") {
            num1++;
            nums1.push(bits);
        }
    });
    if (num0 > num1) {
        currentnums = nums0;
    } else if(num1 >= num0) {
        currentnums = nums1;
    }
    num0 = 0;
    num1 = 0;
    nums0 = [];
    nums1 = [];
    if(currentnums.length > 1){
        process.nextTick(()=>{
            findMyNumO2(currentnums,pos);
        });
    }else{
        //console.log(currentnums[0]);
    }
}
function findMyNumCO2(data,pos){
    //console.log(data,pos);
    data.forEach(bits=>{
        var bit = bits[pos];
        if(bit == "0") {
            numsc0.push(bits);
        } else if(bit == "1") {
            numsc1.push(bits);
        }
    });
    if(currentnums0.length > 1){
    if (numsc0.length < numsc1.length) {
        currentnums0 = numsc0;
    } else if(numsc1.length < numsc0.length) {
        currentnums0 = numsc1;
    }else if(numsc0.length == numsc1.length){
        currentnums0 = numsc0;
    }}
    
    numsc0 = [];
    numsc1 = [];
    if(currentnums0.length > 1){
        process.nextTick(()=>{
            findMyNumCO2(currentnums0,pos);
        });
    }else{
        console.log(currentnums0[0]);
    }
}
for(var i = 0; i < input[0].length; i++) {
   findMyNumO2(currentnums,i); 
}
for(var i = 0; i < input[0].length; i++) {
    findMyNumCO2(currentnums0,i); 
 }
setTimeout(()=>{ //XD
    console.log("O2 Rating:",parseInt(currentnums[0],2));
    console.log("CO2 Rating:",parseInt(currentnums0[0],2));
    console.log("Multipled:",parseInt(currentnums[0],2)*parseInt(currentnums0[0],2));
},1000);