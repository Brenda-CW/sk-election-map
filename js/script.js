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

var setStateResults = function(state) {
  if (dem.electionResults for this.state > green.electionResults for this.state) {
    setStateResults = dem.name;
  } else if (green.electionResults for this.state > dem.electionResults for this.state) {
    setStateResults = green.name;
  }
}

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
