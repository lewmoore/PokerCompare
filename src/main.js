let Result = { "win": 1, "loss": 2, "tie": 3 };

class PokerHand {


	constructor(handOne){
		this.handOne = handOne
	}

	compareWith(hand){
		return Result.tie
	}
}
