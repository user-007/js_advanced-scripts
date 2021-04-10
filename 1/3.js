function sameNumbers(num){
        
        const string = num.toString();    
        let isSame = true;
        let sum   = 0;
        for (let index = 0; index < string.length; index++) {
            if(string[index] !== string [index+1]){
                isSame = false;
            }
              sum  += Number(string[index]);
        }  
        return `${isSame}\n${sum}`;
}
console.log(sameNumbers(5655));
