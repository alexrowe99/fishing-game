// initialising variables that contain (most of) the elements in the HTML file
var hsLink = document.getElementById("high-score-link");
var homeDiv = document.getElementById("home");
var gameDiv = document.getElementById("game");
var endDiv = document.getElementById("endgame");
var hsDiv = document.getElementById("high-scores");
var startButton = document.getElementById("start");
var roundH1 = document.getElementById("round-no");
var rollResult = document.getElementById("roll");
var scoreSpan = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var scoreList = document.getElementById("score-list");
var goBackButton = document.getElementById("go-back");
var clearButton = document.getElementById("clear");

var catchable = [
	{
		num: 1,
		fish: "King George Whiting",
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
		fish: "Small Mulloway",
		keptPoints: -10,
		releasePoints: 10
	},
	{
		num: 4,
		fish: "Snapper",
		keptPoints: 30,
		releasePoints: 40
	},
	{
		num: 5,
		fish: "Large Mullet",
		keptPoints: 20,
		releasePoints: 20
	},
	{
		num: 6,
		fish: "Seaweed Monster",
		keptPoints: 5,
		releasePoints: -5
	}
]

var roll = Math.floor(Math.random()*6) + 1;
console.log(roll);
roundCount = 1;

function startGame() {
	homeDiv.style.display = "none";
	gameDiv.style.display = "block";
	roundH1.children[0].innerText = roundCount;
	rollResult.children[0].innerText = roll;
}

startButton.addEventListener("click", startGame);