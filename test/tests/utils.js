// Generated by CoffeeScript 1.3.3

describe("utils", function() {
  describe("sanitizePosition()", function() {
    it("should properly camelize positions", function() {
      expect(Opentip.prototype.sanitizePosition("top-left")).to.equal("topLeft");
      expect(Opentip.prototype.sanitizePosition("top-Right")).to.equal("topRight");
      return expect(Opentip.prototype.sanitizePosition("BOTTOM left")).to.equal("bottomLeft");
    });
    return it("should handle any order of positions", function() {
      expect(Opentip.prototype.sanitizePosition("right bottom")).to.equal("bottomRight");
      expect(Opentip.prototype.sanitizePosition("left left middle")).to.equal("left");
      return expect(Opentip.prototype.sanitizePosition("left - top")).to.equal("topLeft");
    });
  });
  describe("ucfirst()", function() {
    return it("should transform the first character to uppercase", function() {
      return expect(Opentip.prototype.ucfirst("abc def")).to.equal("Abc def");
    });
  });
  return describe("setCss3Style()", function() {
    return it("should set the style for all vendors", function() {
      var element;
      element = document.createElement("div");
      Opentip.prototype.setCss3Style(element, {
        opacity: "0.5",
        "transition-duration": "1s"
      });
      expect(element.style["-moz-transition-duration"]).to.be("1s");
      expect(element.style["-moz-opacity"]).to.be("0.5");
      expect(element.style["-webkit-transition-duration"]).to.be("1s");
      return expect(element.style["-o-transition-duration"]).to.be("1s");
    });
  });
});
