describe("valid input",function () {
    
    it("should return false when input is not number type",function () {
        expect(checkInputValid("xxxx")).toEqual(false);
    });

    it("should return true when input is number",function () {
        expect(checkInputValid("1234")).toEqual(true);
    });

    it("should return false when input number do not have 4 digit",function () {
        expect(checkInputValid("123")).toEqual(false);
    });

    it("should return false when input same number",function () {
        expect(checkInputValid("1111")).toEqual(false);
    });
    

});