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

var a=17;
if(isPrime(a)==0 || a==1)
{
    console.log("false");
}
else
{
    console.log("true");
}
