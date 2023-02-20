/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import CricketPlayerProfileV1 from "./CricketPlayerProfileV1";
import CricketMatchV1 from "./CricketMatchV1";
import CricketTeamProfileV1 from "./CricketTeamProfileV1";

/* Team1 */
const team1 = new CricketTeamProfileV1(null, "Sharon-MA");

const team1Player1 = new CricketPlayerProfileV1(
  "T1Player1",
  "T1LnamePlayer1",
  null,
  team1
);

const team1Player2 = new CricketPlayerProfileV1(
  "T1Player2",
  "T1LnamePlayer2",
  null,
  team1
);

team1.addPlayerToTeam(team1Player1);
team1.addPlayerToTeam(team1Player2);

team1.setCaptainId(team1Player1);

/* Team2 */
const team2 = new CricketTeamProfileV1(null, "Norwood-MA");

const team2Player1 = new CricketPlayerProfileV1(
  "T2Player1",
  "T2LnamePlayer1",
  null,
  team2
);

const team2Player2 = new CricketPlayerProfileV1(
  "T2Player2",
  "T2LnamePlayer2",
  "T2 P2",
  team2
);

team2.addPlayerToTeam(team2Player1);
team2.addPlayerToTeam(team2Player1);

team2.setCaptainId(team2Player2);

/*Match */

const todaysMatch = new CricketMatchV1(
  team1,
  team2,
  "Olympique Stadium",
  "P1",
  "ATH",
  team1,
  "Massapoag Cup"
);
todaysMatch.setMatchName(team1.displayName + " vs " + team2.displayName);
todaysMatch.setMatchActualStartTime();

const endDate = new Date();
endDate.setTime(endDate.getTime() + 4 * 60 * 60 * 1000);

todaysMatch.setMatchActualEndTime(endDate);

todaysMatch.setMatchActualEndTime();
console.log("todaysMatch team1 Players: " + todaysMatch.displayName);

console.log("todaysMatch team1 Players: " + todaysMatch.team1.getPlayers());

console.log("todaysMatch team2 Players: " + todaysMatch.team2.getPlayers());

console.log(
  "todaysMatch Actual Start time: " + todaysMatch.matchActualStartDateTime
);
console.log(
  "todaysMatch Actual Start time: " + todaysMatch.matchActualEndDateTime
);
