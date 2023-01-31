// initialising variables that contain (most of) the elements in the HTML file
var hsLink = document.getElementById("high-score-link");
var homeDiv = document.getElementById("home");
var gameDiv = document.getElementById("game");
var endDiv = document.getElementById("endgame");
var hsDiv = document.getElementById("high-scores");
var startButton = document.getElementById("start");
var roundH1 = document.getElementById("round-no");
var results = document.getElementById("results");
var caught = document.getElementById("fish");
var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");
var kept = document.getElementById("kept");
var nokept = document.getElementById("nokept");
var decision = document.getElementById("decision");
var rollAgainButton = document.getElementById("roll-again");
var endGameButton = document.getElementById("end");
var scoreSpan = document.getElementById("score");
var endgame = document.getElementById("endgame");
var goHomeButton = document.getElementById("go-home");

// data structure to store details about fish
var catchable = [
	{
		num: 1,
		fish: "a King George Whiting",
		keptPoints: 50,
		releasePoints: 70
	},
	{
		num: 2,
		fish: "Lost Bait",
		keptPoints: -10,
		releasePoints: 0
	},
	{
		num: 3,
		fish: "a Small Mulloway",
		keptPoints: -10,
		releasePoints: 10
	},
	{
		num: 4,
		fish: "a Snapper",
		keptPoints: 30,
		releasePoints: 40
	},
	{
		num: 5,
		fish: "a Large Mullet",
		keptPoints: 20,
		releasePoints: 20
	},
	{
		num: 6,
		fish: "a Seaweed Monster",
		keptPoints: 5,
		releasePoints: -5
	}
]

var score = 0;
var roundCount = 1;
var newCatch;

// function to simulate the roll and show the result
function playGame() {
	var roll = Math.floor(Math.random()*6) + 1;
	roundH1.children[0].innerText = roundCount;
	newCatch = catchable.find(x => x.num === roll);
	caught.children[0].innerText = newCatch.fish;
	roundCount++;
}

// click event listeners for all buttons determine what is showing on the page
startButton.addEventListener("click", () => {
	homeDiv.style.display = "none";
	gameDiv.style.display = "block";
	playGame();
});
yesButton.addEventListener("click", () => {
	results.style.display = "none";
	nokept.style.display = "none";
	kept.style.display = "block";
	decision.style.display = "block";
	score += newCatch.keptPoints;
	if (score < 0) score = 0;
});
noButton.addEventListener("click", () => {
	results.style.display = "none";
	kept.style.display = "none";
	nokept.style.display = "block";
	decision.style.display = "block";
	score += newCatch.releasePoints;
	if (score < 0) score = 0;
});
rollAgainButton.addEventListener("click", () => {
	playGame();
	results.style.display = "block";
	decision.style.display = "none";
});
endGameButton.addEventListener("click", () => {
	gameDiv.style.display = "none";
	endgame.style.display = "block";
	scoreSpan.innerText = score;
});
goHomeButton.addEventListener("click", () => {
	homeDiv.style.display = "block";
	endgame.style.display = "none";
	results.style.display = "block";
	decision.style.display = "none";
	score = 0;
	roundCount = 1;
})