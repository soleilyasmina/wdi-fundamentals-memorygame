console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

const checkForMatch = () => {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

const flipCard = cardId => {
	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);