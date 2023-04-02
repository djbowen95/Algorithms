let expect = chai.expect;

describe("INIT", () => {
    // This might not work on html actually.
    describe("NEW INST", () => {
        it("New instantiation of Arithmetic constructor", () => {})
    })
    // Make sure input is two numerical parameters
  describe("PARAMS", () => {
    it("Will accept + return two parameters", () => {});
    // Might break this down into.. 'can be integer, can't be other values'
    it("Parameter #1 is a number", () => {});
    it("Parameter #2 is a number", () => {});
  });
});

describe("Arithmetic operations", () => {
  //`add` returns the result of `num1` plus `num2`.
  describe("ADD", () => {
    it("Will add parameter #1 and #2 together", () => {});
    it("Will add a integer to a decimal", () => {});
    it("Will add two large numbers", () => {});
  });
  // `subtract` returns the result of `num1` minus `num2`.
  describe("SUBTRACT", () => {
    it("Will subtract parameter #2 from #1", () => {});
    it("Will subtract a integer from an decimal", () => {});
    it("Will subtract a decimal from an integer", () => {});
    it("Will add two large numbers", () => {});
  });
  // `multiply` returns the result of `num1` times `num2`.
  describe("MULTIPLY", () => {
    it("Will multiply parameter #1 by #2", () => {});
    it("Will multiply an integer and a decimal", () => {});
    it("Will multiply two large numbers", () => {});
  });
  // `divide` returns the result of `num1` divided by `num2`.
  describe("DIVIDE", () => {
    it("Will divide parameter #1 by #2", () => {});
    it("Will divide an integer by a decimal", () => {});
    it("Will divide a decimal by an integer", () => {});
    it("Will divide by a large numbers", () => {});
  });
});
