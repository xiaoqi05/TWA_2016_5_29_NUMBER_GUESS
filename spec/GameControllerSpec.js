describe("GameController Controller", function () {
    var guessNumber;
    var generateNumber;
    beforeEach(function () {
        generateNumber = new GenerateNumber();
    });

    it("should return when input error",function () {
        guessNumber ="1234";
        expect(startGame(guessNumber)).toEqual("Guess wrong");
    });



    it('when call gameController with right input at first time then return congratulations', function () {

        spyOn(generateNumber.getGenerateNumber(),'new GenerateNumber().getGenerateNumber').and.returnValue("1234");
        var guessNumber = "1234";
        expect(GameController(guessNumber)).toEqual(true);
    });


});