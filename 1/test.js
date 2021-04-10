function x(param){
    console.log(param.toString().length);
    console.log(param);
}
let interpolated = 'string type 1';

let xx = "Alabala";
//hoisting, global variables
var y = 7;

console.log(x);
name2  = "George"
const otherName = 'Maria'
console.log(x+otherName)
 
const walk = () =>{
console.log("walking")
}

function stringLength(num1, num2, num3){
    let result;
if(num1> num2 && num1 >num3){
    result = num1;
}
else if(num2 > num1 && num2>num3){
    result = num2;

}
else if(num3 > num1 && num3>num2){
    result = num3;
    }
    console.log(`The largest number is ${result}.`);
}
function length_string(s1,s2,s3){
    console.log(s1.toString().length+s2.toString().length+s3.toString().length);
    console.log(Math.floor(s1.toString().length+s2.toString().length+s3.toString().length)/3);
}
function circle(radius){
if(typeof(radius) === 'number'){
console.log(Math.PI*radius*radius);
}
else{
    let res = Math.floor(typeof(radius).toFixed(2));
    let f_res = res.toFixed(2);
    console.log(`We can not calculate the circle area, because we receive a ${f_res}`);
}
}

function operations(num1,num2,op){
let result ;
switch(op){
    case '+':
        console.log(num1+num2);
        break;   
        case '-':
            console.log(num1-num2);
         break;  
    case '*':
             console.log(num1*num2);
             break;  
    case '/':
            console.log(num1/num2);
            break;   
}
}
function sumFinder(n,m){
    let count = 0 ;
    for (let index = n; index <= m; index++) {
        count+=index; 
    }
    return count;
}
function square(size){
    let m =  [size][size];

    for (let index = 0; index < size-1; index++) {
        for(let j = 0 ;j< size-1;j++){
                m[index][j] ='*'; 
        }
    }
}

function dayOfWeek(day){
    switch(day){
        case "Monday":
            console.log(1);
            break;
        case "Tuesday":
            console.log(2);
            break;
        case "Wednesday":
            console.log(3);
            break;
        case "Thursday":
            console.log(4);
            break;
        case "Friday":
            console.log(5);
            break;
        case "Saturday":
            console.log(6);
            break;
        case "Sunday":
        console.log(7);
        break;
        default:
            console.log("error");
            break;
    }
}

function printMatrix(size){
    let x = [size][size];
    for (let i = 0; i < size.length-1; i++) {
        for (let j = 0; j < size.length-1; j++) {
            x[i][j] = '*';
        }
    }
    return x;
}
function fruit(fruits,gramms,price){
    return `I need ${price} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`;
}
console.log('first','second','third');

function sameNumbers(a){
    let num = a ;
    for (let x = 0;x<a.length-1;x++){
        console.log(num[x]);
    }
}
function largestNumber(a,b,c){
    let y = {}
}
function sumNums(n,m){
    let sum  = 0;
    let nn = parseInt(n);
    let mm = parseInt(m);
    for(i = n;i<=m;i++){
        sum+=i;
    }
    console.log(sum);
}
function printSquareMatrix(size) {
    let mat = [size][size];
    for (let i = 0; i <= size - 1; i++) {
        for (let j = 0; j <= size - 1; j++) {
            mat[i][j] = '*';
        }
        mat[i][j] = '*';
    }
    return mat;
}
function timeToWalk(){

}
