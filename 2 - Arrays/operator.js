//rest, spread operator
let nums = [45,-90,343,121,3434,445]
let  [first,second, ...third]  = nums;
console.log(second);
for (let index = 0; index < third.length; index++) {
   console.log(nums[index]);
}
typeof (56)
