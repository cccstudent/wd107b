function m357(a,b)
{
    var c=[0];
    var d=0;
    for(i=a;i<=b;i++)
    {
        if (i%3==0||i%5==0||i%7==0)
        {
            c[d]=i;
            d++;
        }
    }
    return c;
}
var a=10,b=15;
console.log("10~15之間為 3,5,7 任一數之倍數有"+m357(a,b));