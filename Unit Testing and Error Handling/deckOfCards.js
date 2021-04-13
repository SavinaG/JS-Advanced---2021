function printDeckOfCards(cards) {
    let result = [];
    
    for(let card of cards){
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(-1);
        result.push(createCard(face, suit));
    }

    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suitToString = {'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663',}
        if (validFaces.includes(face) == false) {
            console.log(`Invalid card: ${face}${suit}`);
        } else if (Object.keys(suitToString).includes(suit) == false) {
            console.log(`Invalid card: ${face}${suit}`);
        }
        return {
            face,
            suit,
            toString() {
                return `${face}${suitToString[suit]}`
            }
        }
    }
    console.log(result.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C'])
