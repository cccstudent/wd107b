function isPrime(a)
{
    var i;
    for(i=2;i<=a;i++)
    {
        if(a%i==0)
        {
            break;
        }
    }
    if(i==a)
    {
        return 1;
    }
    else return 0;
}
function countPrime(a,b)
{
    var count=0;
    var i;
    for(i=a;i<=b;i++)
    {
        if (isPrime(i)==1)
        {
            count++;
        }
    }
    return count;
}

var a=3,b=7;
console.log(countPrime(a,b));
