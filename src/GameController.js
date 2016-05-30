function startGame(guessNumber) {
    var generateNumberObject = new GenerateNumber();
    var generateNumber = generateNumberObject.getGenerateNumber();
    var compareNumber = new CompareNumber();
    return compareNumber.getCompareResult(guessNumber, generateNumber);
}

var change = 3;
function GameController(Value) {
    if (checkInputValid(Value)) {
        var result = startGame(Value);
        if (result != "4A0B") {
            change--;
            var alertInfo = change == 0 ? "Game over" : "输入错误\n" + result + "\n剩余" + change + "机会";
            alert(alertInfo);
        } else {
            alert("GAME PASS!!!")
        }

    } else {
        alert("请输入4位不重复数字");
    }

}

function checkInputValid(Value) {
    if (Value.length !== 4) {
        return false;
    }
    if (parseInt(Value).toString().length !== 4) {
        return false;
    }
    var isRepeat = false;
    var checkSet = {};
    for (var i = 0; i < 4; i++) {
        var number = Value.charAt(i);
        isRepeat = checkSet[number] ? true : false;
        checkSet[number] = true;
    }
    return !isRepeat;


}

