function commonFactor(a,b)
{
    var max=0;
    for(i=1;i<b;i++)
    {
        if (a%i==0 && b%i==0)
        {
            max=i;
        }
    }
    return max;
}
var a=12,b=15;
console.log("a,b的最大公因數為"+commonFactor(a,b));
