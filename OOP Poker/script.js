class Card {
    constructor(name, color, value) {
        this.name = name;
        this.color = color;
        this.value = value;
    }
    printCards() {
        console.log(`${this.name} ${this.color}, points: ${this.value}`);
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }

    createDeck() {
        const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const colors = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for(let name of names) {
            for(let color of colors) {
                for(let value of values) {
                    this.cards.push(new Card(name, color, value));
                }
            }
        }
    }

    deckShuffle() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            const s = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[s]] = [this.cards[s]], [this.cards[i]];
        }
    }

    printAllCards() {
        console.log(`${this.cards.length} cards are left in the deck.`);
        for(let cards of this.cards) {
            cards.printCards();
        }
    }

    dealCards() {
        const Slim = [];
        const Luke = [];
        for(let i = 0; i < 5; i++) {
            Slim.push(this.cards.shift());
            Luke.push(this.cards.shift());
        }
        return { Slim, Luke };
    }

    printPlayerCards(players) {
        console.log(`Player ${players} has:`);
        for(let cards of players) {
            cards.printCards();
        }
    }

    playerCardValue(players) {
        return players.reduce((sum, cards) => sum + parseInt(cards.value), 0);
    }
}

const deck = new Deck();
deck.printAllCards();

const players = deck.dealCards();

console.log('Players: ');
deck.printPlayerCards(players.Slim);
deck.printPlayerCards(players.Luke);

console.log(`Deck has ${deck.cards.length} cards left.`);
deck.printAllCards();

console.log(`Players card's sum of value is: Slim = ${deck.playerCardValue(players.Slim)} and Luke = ${deck.playerCardValue(players.Luke)}`);