const $cardBtn = $('#card-btn')
const $cards = $('#cards')

const baseURL = 'https://deckofcardsapi.com/api/deck/'
let deckID = null

async function getCard(e) {
    e.preventDefault()
    if (deckID) {
        let res = await axios.get(`${baseURL}${deckID}/draw/?count=1`);
        $cards.append(`<img src="${res.data.cards[0].image}">`);
        if (res.data.remaining == 0) {
            deckID = null
        }}
    else {
        let res = await axios.get(`${baseURL}new/draw/?count=1`);
        deckID = res.data.deck_id
        $cards.text('')
        $cards.append(`<img src="${res.data.cards[0].image}">`)
        }
    
}

$cardBtn.on('click', getCard)