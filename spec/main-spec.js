describe("studentLevel", function () {
    var inputs = [];

    beforeEach(function () {
        inputs = [
            3,
            33,
            60,
            65,
            80,
            85,
            90,
            95
        ];
    });

    it("should print right levels", function () {
        spyOn(console, 'log');
        getStudentLevels(inputs);
        var expectText = "DDCCBBAA";
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe("studentLevelWithErrorInput", function () {
    var inputs = [];

    beforeEach(function () {
        inputs = [
            -1,
            111
        ];
    });

    it("should print -1", function () {
        spyOn(console, 'log');
        getStudentLevels(inputs);
        var expectText = "-1-1";
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});







