function binary(a)
{
    var i,j=a;
    var c=[0];
    for(i=0;j!=1;i++)
    {
        j=j/2;
        c[i]=j%2;
        if(j==1)
        {
            c[i+1]=1;
        }
    }
    return c.reverse();
}
var a=6;
console.log(binary(a));