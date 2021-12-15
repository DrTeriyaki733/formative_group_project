function scoreCalc(score: number, difficulty: number) {
    let finalscore = score * difficulty
    return 
}
let difficultyLevels = {
    easy: 1, //Placeholder value
    medium: 2, //Placeholder value
    hard : 3 //Placeholder value
}
let selectedDifficulty = 0;
let userDifficulty = game.askForString("What difficulty? (easy, medium, hard)", 6)
if (userDifficulty == "easy" || userDifficulty == "Easy") {
    selectedDifficulty = difficultyLevels.easy
} else if (userDifficulty == "medium" || userDifficulty == "Medium") {
    selectedDifficulty = difficultyLevels.medium
} else if (userDifficulty == "hard" || userDifficulty == "Hard") {
    selectedDifficulty = difficultyLevels.hard
} else {
    game.splash("ERROR")
    game.reset();
}
console.log(selectedDifficulty)
let score = info.player1.score()
info.onCountdownEnd(function() {
    scoreCalc(score, selectedDifficulty)
})

