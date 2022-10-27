let flag = true;
let i = 1;
let factorial = 1;

while(flag){
    if(i == 11){
        break;
    }
    factorial = factorial * i;
    i++;
}

console.log(factorial);