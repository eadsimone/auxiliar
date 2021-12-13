// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
//
//     For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var date = userDate.split("/");
    //YYYYMMDD
    let year=date[2];
    let mm= (date[0]<10)? '0'+date[0]:date[0];
    let dd= (date[1]<10)? '0'+date[1]:date[1];
    var newdate = year+mm+dd;
    return newdate;
}

console.log(formatDate("12/31/2014"));