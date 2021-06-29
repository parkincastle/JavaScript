function SoccerPlayer(name, position) { 
  this.name = name;
  this.position = position; 
  this.whatIsYourName = function () {
    return "My name is " + this.name;
  };
  this.whatIsYourPosition = function () { 
	return "My position is " + this.position;
}; 
}

var player = new SoccerPlayer("Park Ji Sung", "Wing Forward");

player.whatIsYourName();
// "My name is Park Ji Sung"

player.whatIsYourPosition();
// "My position is Wing Forward"

player.constructor;
// Function: SoccerPlayer

var player2 = new player.constructor("Koo Ja Cheol");
player2.name;
// "Koo Ja Cheol"