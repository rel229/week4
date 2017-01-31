// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
            });
  });
    return cards;
  }

// END DO NOT CHANGE CODE

$(function() {
  $("#go").on("click", function(event) {
    event.preventDefault()
    $(".img-responsive").fadeOut(1);
    var Deck = getDeck().shuffle();
      //console.log(Deck[5]);
      //console.log(Deck[4]);
      //console.log(Deck[3]);
      //console.log(Deck[2]);
      //console.log(Deck[1]);
      $("#c1").delay(300).attr('src',"http://golearntocode.com/images/cards/" + Deck[1] + ".png");
      $("#c2").delay(300).attr('src',"http://golearntocode.com/images/cards/" + Deck[2] + ".png");
      $("#c3").delay(300).attr('src',"http://golearntocode.com/images/cards/" + Deck[3] + ".png");
      $("#c4").delay(300).attr('src',"http://golearntocode.com/images/cards/" + Deck[4] + ".png");
      $("#c5").delay(300).attr('src',"http://golearntocode.com/images/cards/" + Deck[5] + ".png");

      $(".img-responsive").delay(500).fadeIn(1000);

        });

  })
