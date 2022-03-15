let a=0;
let b=1; 
let y=0;

for(let i=0; i<12;i++)
{   if(i===0 || i===1)
    {   y = a + b;
        console.log(y);
        y=0;
    }
    else{
        y= a+b;
        a=b;
        b=y;
        console.log(y);
    }
}

/*let fib = []
fib[0] = 0
fib[1] = 1
for (let i = 2; i <= 10;i++){
  fib[i] = fib[i-2] + fib[i-1]
  console.log(fib[i])
}
 */