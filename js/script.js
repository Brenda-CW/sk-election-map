var newCandidate =function(name, partyColor) {
var politician={};  //new blank object
politician.name = name; //name is parameter to be defined when making a new candidate
politician.partyColor = partyColor; //color is parameter to be used to color the state blocks that each candidate won
politician.electionResults = null;
politician.totalVotes = function() {
  this.totalVotes = 0;
  
  for(var i = 0; i <this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};
  
politician.announceCandidate = function()
    {
      console.log(this.name +  " is running for President! Welcome to the race!");
    };
 
    politician.announceCandidate();
  
  return politician; 
};

var dem = newCandidate("Lisa Simpson", [132, 17, 11]); //color is added here because it is a parameter in the factory function
var green = newCandidate("Baby Yoda", [245, 141, 136]);

dem.electionResults = [5,	1,	7,	2,	33,	6,	4,	2,	1,	14,	8,	3,	1,	11,	11,	0,	5,	3,	3,	3,	7,	4,	8,	9,	3,	7,	2,	2,	4,	2,	8, 3,	15,	15,	2,	12,	0,	4,	13,	1,	3,	2,	8,	21,	3,	2,	11,	1,	3,	7,	2]
green.electionResults = [4,	2,	4,	4,	22,	3,	3,	1,	2,	15,	8,	1,	3,	9,	0,	6,	1,	5,	5,	1,	3,	7,	8,	1,	3,	3,	1,	3,	2,	2,	6,	2,	14,	0,	1,	6,	7,	3,	7,	3,	6,	1,	3,	17,	3,	1,	2,	11,	2,	3,	1]

dem.electionResults [9] = 1;
green.electionResults [9] = 28;

dem.electionResults [4] = 17;
green.electionResults [4] = 38;

dem.electionResults [43] = 11;
green.electionResults [43] = 27;

console.log("Dem election results are " + dem.electionResults);
console.log("Green election results are " + green.electionResults);

console.log("The dem color is " + dem.partyColor)
console.log("The green party color is " + green.partyColor)

//This calculates the winner for each state
var setStateResults = function(state) {
  theStates[state].winner = null;

  if (dem.electionResults[state] > green.electionResults[state]) {
    theStates[state].winner = dem;
  } else if (green.electionResults[state] > dem.electionResults[state]) {
    theStates[state].winner = green;
  } 

  //This section fills in the state table
  var stateTable = document.getElementById('stateResults');

  var header = stateTable.children[0].children[0];
  var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;
  var stateAbbrev = header.children[1];
  stateAbbrev.innerText = theStates[state].nameAbbrev;

  //This fills in the first row of the state table when you mouse over the state
  var row1 = stateTable.children[1].children[0];
  var name1 = row1.children[0];
  name1.innerText = dem.name;
  var results1 = row1.children[1];
  results1.innerText = dem.electionResults[state];

  //This fills in the 2nd row of the state table when you mouse over
  var row2 = stateTable.children[1].children[1];
  var name2 = row2.children[0];
  name2.innerText = green.name;
  var results2 = row2.children[1];
  results2.innerText = green.electionResults[state];
  
  //This turns the state shapes the color of the state's winner
  var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
    } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  //DECLARE WINNER - NEEDS IF/ELSE STATEMENT FOR STATES WITH A TIE
var winner = stateTable.children[1].children[2];
var winnerName = winner.children[1];
  if (stateWinner === null) {
    winnerName.innerText = "Tie!"
  } else winnerName.innerText = theStates[state].winner.name;
};

dem.totalVotes();
green.totalVotes();

console.log("The dems have collected " + dem.totalVotes + " so far!");
console.log("The green party has collected " + green.totalVotes + " so far!")

var winner = "Who will it be?";

if (dem.totalVotes > green.totalVotes) {
  winner = dem.name;
} else if (green.totalVotes > dem.totalVotes) {
  winner = green.name;
} else {
  winner = "It's a tie!"
}
  
console.log("Our new President is...." + winner + "!!!");

var countryTable = document.getElementById('countryResults');

countryTable.children[0].children[0].children[0].innerText = dem.name;
countryTable.children[0].children[0].children[1].innerText = dem.totalVotes;
countryTable.children[0].children[0].children[2].innerText = green.name;
countryTable.children[0].children[0].children[3].innerText = green.totalVotes;
countryTable.children[0].children[0].children[5].innerText = winner;
//alternate would be to list "var row = countrytable.children[0].children[0];" after "var countryTable" and then just list "row.children[0].innerText..." for each row to save typing

