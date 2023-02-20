/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class CricketTeamProfileV1 {
  constructor(
    // Defines parameters:
    displayName,
    masterTeamProfileId,
    tournamentId
  ) {
    // Define properties:
    this.id = this.generateId();
    this.createdDateTime = Date.now;

    this.displayName = displayName;
    this.masterTeamProfileId = masterTeamProfileId;
    this.tournaments = this.addTournamentId(tournamentId);

    this.isMasterProfile = this.setIsMasterProfile(masterTeamProfileId);
    this.teamProfileStatus = "Pending Submission";
    this.players = [];
  }

  setIsMasterProfile(masterTeamProfileId) {
    if (masterTeamProfileId == null) {
      this.isMasterProfile = true;
    }

    this.isMasterProfile = false;
  }

  addTournamentId(tournamentId) {
    if (tournamentId == null) {
      return this.tournaments;
    } else {
      return this.tournaments.push(tournamentId);
    }
  }

  setTeamProfileStatus(status) {
    this.teamProfileStatus = status;
  }

  // Add methods like normal functions:
  setCaptainId(playerId) {
    this.captainId = playerId;
  }
  setManagerId(playerId) {
    this.managerId = playerId;
  }

  setCricketMatchId(cricketMatchId) {
    this.cricketMatchId = cricketMatchId;
  }

  addPlayerToTeam(player) {
    this.players.push(player);
  }

  removePlayerFromTeam(player) {
    this.players.pop(player);
  }

  getPlayers() {
    return this.players;
  }
}

export default CricketTeamProfileV1;
