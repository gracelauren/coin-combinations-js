var coinCombination = function(coins) {
  var coins = coins;
  var sacagawea = 0;
  var kennedyHalfDollar = 0;
  var quarter = 0;
  var dime = 0;
  var nickle = 0;
  var penny = 0;
  var change = "";

  do {
    sacagawea = Math.floor(coins / 1.00);
    coins = Math.abs(coins % 1.00);
  } while (coins >= 1.00);

  do {
    kennedyHalfDollar = Math.floor(coins / 0.50);
    coins = Math.abs(coins % 0.50);
  } while (coins >= .50);

  do {
    quarter = Math.floor(coins / 0.25);
    coins = Math.abs(coins % 0.25);
  } while (coins >= .25);

  do {
    dime = Math.floor(coins / 0.10);
    coins = Math.abs(coins % 0.10);
  } while (coins >= .10);

  do {
    nickle = Math.floor(coins / 0.05);
    coins = Math.abs(coins % 0.05);
  } while (coins >= .05);

  do {
    penny = Math.floor(coins / 0.01);
    coins = Math.abs(coins % 0.01);
  } while (coins >= .01);

  if ( sacagawea > 1 ) {
    change = change + sacagawea + " Sacagawea Dollars, ";
  } else if ( sacagawea === 1 ) {
    change = change + sacagawea + " Sacagawea Dollar, ";
  } else {
    change = change;
  }

  if ( kennedyHalfDollar > 1 ) {
    change = change + kennedyHalfDollar + " Kennedy Half Dollars, ";
  } else if ( kennedyHalfDollar === 1 ) {
    change = change + kennedyHalfDollar + " Kennedy Half Dollar, ";
  } else {
    change = change;
  }

  if ( quarter > 1 ) {
    change = change + quarter + " Quarters, ";
  } else if ( quarter === 1 ) {
    change = change + quarter + " Quarter, ";
  } else {
    change = change;
  }

  if ( dime > 1 ) {
    change = change + dime + " Dimes, ";
  } else if ( dime === 1 ) {
    change = change + dime + " Dime, ";
  } else {
    change = change;
  }

  if ( nickle > 1 ) {
    change = change + nickle + " Nickles, ";
  } else if ( nickle === 1 ) {
    change = change + nickle + " Nickle, ";
  } else {
    change = change;
  }

  if ( penny > 1 ) {
    change = change + penny + " Pennies, ";
  } else if ( penny === 1 ) {
    change = change + penny + " Penny, ";
  } else {
    change = change;
  }

  change = change.slice(0, change.length -2)
  return change;

};
