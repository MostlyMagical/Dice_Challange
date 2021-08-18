const roll = document.getElementById("roll")
const score = document.getElementById("score")
const nat1 = document.getElementById("nat1")
const wins = document.getElementById("wins")
const losses = document.getElementById("losses")
const rules = document.getElementById("rules")
const tableBet = document.getElementById("tableBet")
const bet = document.getElementById("bet")
const placeYourBets = document.getElementById("placeYourBets")
const money = document.getElementById("money")
const clearBet = document.getElementById("clearBet")

let currentScore = 0
let currentWins = 0
let currentLosses = 0
let currentBet = 0
let currentMoney = 500

function win_lose(){
    if (currentScore >=21) {
        currentWins += 1
        currentMoney += currentBet * 2
        money.innerHTML = `MONEY £${currentMoney}`
        currentBet = 0
        tableBet.innerHTML = `Bet £${currentBet}`
        wins.innerHTML = `Wins: ${currentWins}`
    } else if (rules.innerHTML == "Bad luck!") {
        currentLosses += 1
        currentBet = 0
        tableBet.innerHTML = `Bet £${currentBet}`
        losses.innerHTML = `Losses: ${currentLosses}`
    }
}

roll.addEventListener("click",()=>{
    const rollDice = Math.floor(Math.random()*6 + 1)
    dice.src = `Dice-Img/d${rollDice}.png`
    if (rollDice == 1) {
        rules.innerHTML = "Bad luck!"
        win_lose()
        currentScore = 0
    } else {
        rules.innerHTML = `You Rolled a ${rollDice}`
    } if (rollDice != 1) {
        currentScore += rollDice
        score.innerHTML = `${currentScore}`
    } else {
        score.innerHTML = 0
    }

    if (currentScore >= 21) {
        rules.innerHTML ="Victory!"
        win_lose()
        currentScore = 0
    }
})



reset.addEventListener("click",()=>{
    score.innerHTML = `0`
    rules.innerHTML = "Score 21 to Win! Roll a 1 and you lose."
})

bet.addEventListener("click",()=>{
    if (currentMoney >= 50) {
        currentMoney -= 50
        money.innerHTML = `Money £${currentMoney}`
        currentBet += 50
        tableBet.innerHTML = `Bet £${currentBet}`
        placeYourBets.innerHTML = "Place Your Bets!"
    } else if (currentMoney <= 49) {
        placeYourBets.innerHTML = "You are out of money!"
    }
})

clearBet.addEventListener("click",()=>{
    currentBet = 0
    currentMoney = 500
    money.innerHTML = `Money £${currentMoney}`
    tableBet.innerHTML = `Bet £${currentBet}`
})
