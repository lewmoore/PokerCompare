let Result = { "win": 1, "loss": 2, "tie": 3 };


class PokerHand {


	constructor(handOne){
		this.handOne = handOne.split(' ')
	}

	compareWith(hand){
		let handArray = hand.split(' ')
		let hand1 = Hand.solve(this.handOne)
		let hand2 = Hand.solve(handArray)
		if (hand1.rank == hand2.rank) return Result.tie
		return (hand1.rank > hand2.rank) ? Result.win : Result.loss


	}

}
