function getStudentLevels(inputs) {
    var levels = loadLevel();
    var result = [];

    inputs.forEach(function (item) {
        var index =getLevelWithScore(levels, item);
        result.push(index);
    });
    console.log(buildString(result));
}

function getLevelWithScore(levels, score) {
    for (var i = 0; i < levels.length; i++) {
        if (score < levels[i]) {
            return i;
        }
    }
    return -1;
}

function buildString(result) {
    var levelString = ['D', 'C', 'B', 'A'];
    var resultString ="";
    result.forEach(function (item) {
        resultString+=levelString[item-1]||"-1";
    })
    return resultString;
}



