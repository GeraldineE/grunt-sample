describe("calculate mean", function() {
  
  it("returns the mean of two positive numbers", function() {
    expect(mean(3, 6)).toBe(4.5);
  });
  
  it("returns the mean of two negative numbers", function() {
    expect(mean(-3, -6)).toBe(-4.5);
  });
  
  it("returns the mean of two numbers with different sign", function() {
    expect(mean(3, -6)).toBe(-1.5);
  });

});

