describe('PokerHand', function(){
  let hand

  beforeEach(function(){
    hand = new PokerHand("AH KH QH JH TH")
  })

  it('accepts a string on initialise', function(){
    expect(hand.handOne).toEqual(['AH', 'KH', 'QH', 'JH', 'TH'])
  })
})
