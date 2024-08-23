const cardValues = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};

class Card {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.value = cardValues[name]; 
  }
  printCards() {
    console.log(`${this.name} ${this.color}, points: ${this.value}`);
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.cardPile = [];
    this.createDeck();
  }

  createDeck() {
    const names = Object.keys(cardValues); 
    const colors = ["Spades", "Hearts", "Diamonds", "Clubs"];

    for (let name of names) {
      for (let color of colors) {
        this.cards.push(new Card(name, color)); 
      }
    }
  }

  deckShuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  printAllCards() {
    console.log(`${this.cards.length} cards are left in the deck.`);
    for (let currentCard of this.cards) {
      currentCard.printCards();
    }
  }

  dealCards() {
    const Slim = [];
    const Luke = [];
    let index = 0;

    while (index < 5 && this.cards[index]) {
      Slim.push(this.cards.pop([index]));
      index++;
    }

    while (index < 10 && this.cards[index]) {
      Luke.push(this.cards.pop([index]));
      index++;
    }

    return { Slim, Luke };
  }

  printPlayerCards(players) {
    for (let playerHandName in players) {
      console.log(`Player ${playerHandName} holds: `);
      for (let cards of players[playerHandName]) {
        cards.printCards();
      }
    }
  }

  playerCardValue(players) {
    return players.reduce((sum, cards) => sum + parseInt(cards.value), 0);
  }

  drawCard(players) {
    for (let playerHand in players) {
      for (let i = players[playerHand].length; i < 5; i++) {
        const drawCard = this.cards.pop();
        players[playerHand].push(drawCard);
      }
    }
  }

  playCards(hand) {
    for (let player in hand) {
      const playedCards = hand[player].splice(0, 2);
      this.cardPile.push(...playedCards);
    }
  }

  playAllCards(hand) {
    for (let player in hand) {
      const playedCards = hand[player].splice(0, hand[player].length);
      this.cardPile.push(...playedCards);
    }
  }

  resetGame() {
    this.cards.push(...this.cardPile);
    this.cardPile = [];
    this.deckShuffle();
    this.printAllCards();
  }
}

const deck = new Deck();
deck.deckShuffle();
deck.printAllCards();

const players = deck.dealCards();

console.log(`Deck has ${deck.cards.length} cards left.`);

deck.printPlayerCards(players);
const { Slim, Luke } = players;

console.log(
  `Players card's sum of value is: Slim = ${deck.playerCardValue(
    players.Slim
  )} and Luke = ${deck.playerCardValue(players.Luke)}`
);

deck.playCards(players);
deck.drawCard(players);

console.log(`Deck has ${deck.cards.length} cards left.`);
deck.printPlayerCards(players);
console.log(
    `Players card's sum of value is: Slim = ${deck.playerCardValue(
      players.Slim
    )} and Luke = ${deck.playerCardValue(players.Luke)}`
  );
  
deck.playAllCards(players);
deck.resetGame();
