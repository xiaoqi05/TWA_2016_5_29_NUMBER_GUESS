describe("generate random number ", function () {
    var generateNumber;
    beforeEach(function () {
        generateNumber = new GenerateNumber();
    });

    it("should have 4 length", function () {
        var result = generateNumber.getGenerateNumber().length;
        expect(result).toBe(4);
    });

    it("should be 4 digit", function () {
        var result = generateNumber.getGenerateNumber();
        var resultNumber = parseInt(result);
        expect(result.length).toEqual(4);
        expect(resultNumber).toEqual(jasmine.any(Number));
    });

    it("should be 4 different digit", function () {
        var result = generateNumber.getGenerateNumber();
        var isRepeat = false;
        var checkSet = {};
        for (var i = 0; i < 4; i++) {
            var number = result.charAt(i);
            isRepeat = checkSet[number] ? true : false;
            checkSet[number] = true;
        }
        expect(isRepeat).toEqual(false);
    });

    it("should be random(means should be not repeat)", function () {
        var mySet = new Set();
        for (var i = 0; i < 10; i++) {
            var result = generateNumber.getGenerateNumber();
            mySet.add(result);
        }
        expect(mySet.size).toEqual(10);
    });

});







