function createCheckDigit(membershipId) {
    // Write the code that goes here.
    var sum=0;
    // var total=0;
    for (let i=0; i < membershipId.length; i++){
        sum+=parseInt(membershipId[i]);
    }
    if ( sum >=10)
    return createCheckDigit( sum.toString());
    else return sum;
    // for (let i=0; i < sum.length; i++){
    //     total+= parseInt(sum[i]);
    // }
    // return total;

}

console.log(createCheckDigit("55555"));