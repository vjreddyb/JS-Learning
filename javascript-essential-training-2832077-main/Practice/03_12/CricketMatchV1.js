/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class CricketMatchV1 {
  constructor(
    // Defines parameters:
    team1,
    team2,
    stadiumId,
    pitchId,
    locationId,
    homeTeamId,
    tournamentId
  ) {
    // Define properties:
    this.id = this.generateId();
    this.team1 = team1;
    this.team2 = team2;
    this.stadiumId = stadiumId;
    this.pitchId = pitchId;
    this.locationId = locationId;
    this.homeTeamId = homeTeamId;
    this.tournamentId = tournamentId;
    this.matchName =
      this.tournamentId + "-" + this.team1 + " vs. " + this.team2;
    this.matchScheduleStartTime = null;
    this.matchScheduleEndTime = null;
    this.matchActualStartDateTime = null;
    this.matchActualEndDateTime = null;
    this.ground = null;
    this.matchStatus = "Pending";
    this.winnerTeamId = null;
    this.created = Date.now();
  }
  // Add methods like normal functions:
  setMatchName(matchName) {
    this.matchName = matchName;
  }
  setPitchDetails(
    pitchLength,
    pitchBreadth,
    groundLength,
    groundBreadth,
    groundId
  ) {
    this.ground.pitchLength = pitchLength;
    this.ground.pitchBreadth = pitchBreadth;
    this.ground.groundLength = groundLength;
    this.ground.groundBreadth = groundBreadth;
    this.ground.groundId = groundId;
  }

  setUmpiresAndReferee(refereeId1, umpire1Id, umpire2Id, umpire3Id) {
    this.refereeId1 = refereeId1;
    this.umpire1Id = umpire1Id;
    this.umpire2Id = umpire2Id;
    this.umpire3Id = umpire3Id;
  }

  setManOfTheMatch(playerId) {
    this.momPlayerId = playerId;
  }

  setTeam1Profile(team) {
    this.team1 = team;
  }

  setTeam2Profile(team) {
    this.team2 = team;
  }

  setMatchActualStartTime(now) {
    if (now != null) {
      this.matchActualStartDateTime = now;
    } else {
      this.matchActualStartDateTime = Date.now();
    }
  }

  setMatchActualEndTime(now) {
    if (now != null) {
      this.matchActualEndDateTime = now;
    } else {
      this.matchActualEndDateTime = Date.now();
    }
  }
}

export default CricketMatchV1;
