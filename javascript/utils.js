// Ajax
/*
<div id="demo">
    <h2>Let AJAX change this text</h2>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>

*/
//pure javascript
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

//usin ajax jqeury
function requestTouristItems(){
    $.ajax({
        url: 'http://localhost:7800/touristitems.json#',
        method: 'GET'
    }).then(function(data) {
        console.log(data);
        renderTourist(data);
        ItemTourist=data;
    });

};


//array map
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

//(if you only want to know if it exists, use the similar test()
//SEARCH
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2))

// find()
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
    return element > 10;
});

console.log(found);
// expected output: 12