function scoreCalc (score: number, difficulty: number) {
    finalscore = score * difficulty
    return
}
info.onCountdownEnd(function () {
    scoreCalc(score, selectedDifficulty)
})
function splashScreen () {
    scene.setBackgroundImage(assets.image`mainSplashScreen`)
    game.splash("Welcome to HIT THE TARGET", "(Press A to start)")
    let userDifficulty: string;
    userDifficulty = game.askForString("What difficulty? (easy, medium, hard)", 6)
}
function easyDifficultyGameplay() {
    //This will contain the gameplay code for the easy difficulty setting
}
function mediumDifficultyGameplay() {
    //This will contain the gameplay code for the medium difficulty setting
}
function hardDifficultyGameplay() {
    //This will contain the gameplay code for the hard difficulty setting
}
let finalscore = 0
let score = 0
let selectedDifficulty = 0
let difficultyLevels = {
    easy: 1, //Placeholder value
    medium: 2, //Placeholder value
    hard : 3 //Placeholder value
}
// Visual output starts here
let userDifficulty: string;
splashScreen()
if (userDifficulty == "easy" || userDifficulty == "Easy") {
    selectedDifficulty = difficultyLevels.easy
    easyDifficultyGameplay();
} else if (userDifficulty == "medium" || userDifficulty == "Medium") {
    selectedDifficulty = difficultyLevels.medium
    mediumDifficultyGameplay();
} else if (userDifficulty == "hard" || userDifficulty == "Hard") {
    selectedDifficulty = difficultyLevels.hard
    hardDifficultyGameplay();
} else {
    game.splash("ERROR")
    game.reset()
}

// Code to run at game end
console.log(selectedDifficulty)
score = info.player1.score()
