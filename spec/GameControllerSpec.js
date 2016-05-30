describe("Game Controller", function () {
    var gameController;
    var guessNumber;
    beforeEach(function () {
        gameController = new GameController();
    });

    it("should return when input error",function () {
        guessNumber ="1234";
        expect(gameController.startGame(guessNumber)).toEqual("Guess wrong");
    });

});