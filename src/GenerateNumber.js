function GenerateNumber() {

}

GenerateNumber.prototype.getGenerateNumber = function () {
    var result = '';
    var mySet = new Set();
    while (mySet.size != 4) {
        var random = Math.floor(Math.random() * 10);
        mySet.add(random);
    }
    mySet.forEach(function (item) {
        result += item;
        console.log(result);
    });
    return result;
};





