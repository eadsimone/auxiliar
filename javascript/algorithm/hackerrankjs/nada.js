function divisores(n) {
    var a=1;
    var b=0;
    var l = new Array();
    while(a<n) {
        var h = n % a;
        if(h == 0) {
            l[b]=a;
            b++;
        }
        a++;
    }
    return l;
}

function suma(L) {
    var lg=L.length;
    var a=0;
    var sum=0;
    while(a<lg) {
        sum=sum+L[a];
        a++;
    }
    return sum;
}

n1=prompt('Introduce el primer num.:');
n2=prompt('Introduce el segundo num.:');
L1=divisores(n1);
L2=divisores(n2);
s1=suma(L1);
s2=suma(L2);

if(s1==n2 && s2==n1) {
    alert('Los numeros son amigos');
} else {
