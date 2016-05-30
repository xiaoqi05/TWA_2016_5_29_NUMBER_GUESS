function CompareNumber() {
}

CompareNumber.prototype.getCompareResult = function (generateNumber, guessNumber) {
    var countA = 0;
    var countB;
    var numberSize = generateNumber.length;
    var totalNumberSize = 8;
    var mySet = new Set();
    mySet.clear();
    for (var i = 0; i < numberSize; i++) {
        countA += (generateNumber.charAt(i) == guessNumber.charAt(i)) ? 1 : 0;
    }
    for (var j = 0; j < numberSize; j++) {
        mySet.add(generateNumber[j]);
        mySet.add(guessNumber[j]);
    }
    countB = (totalNumberSize - mySet.size) - countA;
    return countA + "A" + countB + "B";
};