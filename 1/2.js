//debugging with F10;
function solve2(num1,num2){
   //greatest common divisor - JS
   while(num2!=0){
       let temp = num2;
        num2 = num1%num2;
         num1 = temp ;
       
   }
   return num1;
}
console.log(solve2(15,5));