describe("generate random number ", function () {
    var inputs = [];

    beforeEach(function () {
        inputs = [
            0,
            95,
            100
        ];
    });

    it("should have 4 length", function () {
        var result = generateNumber().length;
        expect(result).toBe(4);
    });

    it("should be 4 digit", function () {
        var result = generateNumber();
        var resultNumber = parseInt(result);
        expect(resultNumber.toString().length).toEqual(4);
        expect(resultNumber).toEqual(jasmine.any(Number));
    });

    it("should be random(means should be not repeat)", function () {
        var mySet = new Set();
        for (var i = 0; i < 10; i++) {
            var result = generateNumber();
            //noinspection JSUnresolvedFunction
            console.debug(result);
            mySet.add(result);
        }
        expect(mySet.size).toEqual(10);
    });


});







