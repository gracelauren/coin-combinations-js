describe("coinCombination", function() {

  it('will return to you with one sacagawea dollar if you put in $1.00', function() {
    expect(coinCombination(1.00)).to.equal("1 Sacagawea Dollar");
  });

  it('will return to you with one kennedy half dollar if you put in $0.50', function() {
    expect(coinCombination(0.50)).to.equal("1 Kennedy Half Dollar");
  });

  it('will return to you with one quarter if you put in $0.25', function() {
    expect(coinCombination(0.25)).to.equal("1 Quarter");
  });

  it('will return to you with one dime if you put in $0.10', function() {
    expect(coinCombination(0.10)).to.equal("1 Dime");
  });

  it('will return to you with one nickle if you put in $0.05', function() {
    expect(coinCombination(0.05)).to.equal("1 Nickle");
  });

  it('will return to you with one penny if you put in $0.01', function() {
    expect(coinCombination(0.01)).to.equal("1 Penny");
  });

  it('will return to you with one kennedy half dollar and one quarter if you put in $0.75', function() {
    expect(coinCombination(0.75)).to.equal("1 Kennedy Half Dollar, 1 Quarter");
  })

  it('will return to you with one kennedy half dollar and one quarter and 4 pennies if you put in $0.79', function() {
    expect(coinCombination(0.79)).to.equal("1 Kennedy Half Dollar, 1 Quarter, 4 Pennies");
  })

});
