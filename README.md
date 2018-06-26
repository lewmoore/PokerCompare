# Grabyo front end technical test

## Summary

This is a Javascript application that, when initialised with a poker hand, can be compared against another poker hand in order to see which hand wins. This is built using javascript, Jasmine, Karma and utilises the [Pokersolver library](https://github.com/goldfire/pokersolver).

## Instructions

In order to run this application, run the following commands in your terminal:
* `git clone https://github.com/lewmoore/PokerCompare.git`
* `cd PokerCompare`
* `npm install`
* `open index.html`

Now, to interact with the application, open the console(`cmd + alt + j`) and create a new instance of PokerHand with `hand = new PokerHand(arg)` with `arg` being a poker hand of your choice. Note, this poker hand must conform to the characteristics outlined below.

Now you have an instance of `PokerHand`, you can compare this hand with another by using the command `hand.compareWith(arg)` with `arg` being another poker hand.

This will result in one of three outputs outlined below:
* `1` - Your PokerHand beats the comparison hand
* `2` - The comparison hand beats your PokerHand
* `3` - Your PokerHand and the comparison hand are the same.




At Grabyo we love board games and will have an occasional poker night.
Since no one remembers the card ranking you will have to write a program that
compare poker hands and determines a winner.

## 1. Task

A poker hand has a constructor that accepts a string containing 5 cards:

```
var hand = new PokerHand("KS 2H 5C JD TD");
```

and a method to compare itself to another hand

```
PokerHand.prototype.compareWith = function(hand) { /* Your code here */ };
```

The characteristics of the string of cards are:
* A space is used as card seperator
* Each card consists of two characters
* The first character is the value of the card, valid characters are: `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `T`(en), `J`(ack), `Q`(ueen), `K`(ing), `A`(ce)
* The second character represents the suit, valid characters are: `S`(pades), `H`(earts), `D`(iamonds), `C`(lubs)

The result of your poker hand compare can be one of these 3 options:
* Win should return the integer `1`
* Loss should return the integer `2`
* Tie should return the integer `3`

The ranking of the hands should follow the [Texas Hold'em rules](http://freepokerhoney.com/website_images/8245/poker-strategy/poker-hand-rankings.png)

## 2. Requirements

All your code should be contained in the `src/` folder.
You are free to architect your code the way you want. You can use any libraries that you feel are relevant to solve this problem.

Unit tests are welcome

/!\\ You need to include a markdown file that shows the steps required to run your demo

Good luck ;-)
