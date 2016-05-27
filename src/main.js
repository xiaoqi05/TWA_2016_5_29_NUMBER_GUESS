function getStudentLevels(inputs) {
    var levels = loadLevelScore();
    var result = [];
    inputs.forEach(function (item) {
        var index = getLevelIndexWithScore(levels, item);
        result.push(index);
    });
    console.log(buildString(result));
    return buildString(result);
}

function getLevelIndexWithScore(levels, score) {
    for (var i = 0; i < levels.length; i++) {
        if (score < levels[i]) {
            return i;
        }
    }
    return -1;
}

function buildString(result) {
    var levelString = loadLevel();
    var resultString = "";
    result.forEach(function (item) {
        resultString += levelString[item - 1] || "-1";
    });
    return resultString;
}
