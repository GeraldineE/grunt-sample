describe("person's fullname", function() {
  
  it("is composed from firstname and lastname", function() {
    var lucas = new Person("Lucas", "Grijander");
  
    expect(lucas.fullname()).toBe("Lucas Grijander");
  });
  
});