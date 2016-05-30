describe("CompareNumberSpec", function () {
    var generateNumber;
    var guessNumber;
    var compare;

    beforeEach(function () {
        compare = new CompareNumber();
    }); 

    it("1234 & 1234 should be output 4A0B", function () {
        generateNumber = "1234";
        guessNumber = "1234";
        expect(compare.getCompareResult(generateNumber, guessNumber)).toEqual("4A0B");
    });

    it("1234 & 4321 should be output 0A4B", function () {
        generateNumber = "1234";
        guessNumber = "4321";
        expect(compare.getCompareResult(generateNumber, guessNumber)).toEqual("0A4B");
    });

    it("1234 & 6789 should be output 0A0B", function () {
        generateNumber = "1234";
        guessNumber = "6789";
        expect(compare.getCompareResult(generateNumber, guessNumber)).toEqual("0A0B");
    });

    it("1234 & 3456 should be output 0A2B", function () {
        generateNumber = "1234";
        guessNumber = "3456";
        expect(compare.getCompareResult(generateNumber, guessNumber)).toEqual("0A2B");
    });

    it("1234 & 1256 should be output 2A0B", function () {
        generateNumber = "1234";
        guessNumber = "1256";
        expect(compare.getCompareResult(generateNumber, guessNumber)).toEqual("2A0B");
    });

    it("1234 & 1324 should be output 2A2B", function () {
        generateNumber = "1234";
        guessNumber = "1324 ";
        expect(compare.getCompareResult(generateNumber, guessNumber)).toEqual("2A2B");
    });
});