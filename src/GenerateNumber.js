function generateNumber() {
    var result = '';
    var mySet = new Set();
    while (mySet.size != 4) {
        var random = Math.floor(Math.random() * 10);
        mySet.add(random);
    }
    //console.log(mySet.size);
    mySet.forEach(function (item) {
        result += item;
    });
    return result;
}



