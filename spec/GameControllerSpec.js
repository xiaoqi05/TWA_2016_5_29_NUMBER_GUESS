describe("GameController Controller", function () {
    var guessNumber;
    var generateNumber;
    beforeEach(function () {
        generateNumber = new GenerateNumber();
    });

    it("when call gameController with right input at first time then return congratulations", function () {
        guessNumber = "1234";
        spyOn(generateNumber, "getGenerateNumber").and.returnValue("1234");
        expect(startGame(guessNumber)).toEqual("4A0B");
    });


});