describe("studentLevel", function () {
    var inputs = [];

    beforeEach(function () {
        inputs = [
            0,
            3,
            60,
            65.5,
            80.5,
            85,
            90,
            95,
            100
        ];
    });

    it("should return right levels when inputs multitude score", function () {
        var result = getStudentLevels(inputs);
        var expectText = "DDCCBBAAA";
        expect(result).toBe(expectText);
    });

    it("should return right levels when single score", function () {
        var result = getStudentLevels([66]);
        var expectText = "C";
        expect(result).toBe(expectText);
    });

    it("should return right levels when error score", function () {
        var result = getStudentLevels([-1, 101]);
        var expectText = "-1-1";
        expect(result).toBe(expectText);
    });

    it("should return right levels when null score", function () {
        var result = getStudentLevels([]);
        var expectText = "";
        expect(result).toBe(expectText);
    });


});







