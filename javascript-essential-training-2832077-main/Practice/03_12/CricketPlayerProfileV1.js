/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class CricketPlayerProfileV1 {
  constructor(
    // Defines parameters:
    fname,
    lname,
    displayName,
    teamId
  ) {
    // Define properties:
    this.fname = fname;
    this.lname = lname;
    this.displayName = displayName;
    this.displayableName = this.generateDisplayableName();
    this.teamId = teamId;
    this.status = "Pending Submission";
    this.createdDateTime = Date.now;
    this.id = this.generateId();
  }

  generateDisplayableName() {
    if (this.displayName == null) {
      this.displayableName = this.lname + ", " + this.fname;
    } else {
      this.displayableName = this.displayName;
    }
  }

  setIsBatsMan(batsman) {
    this.isBatsMan = batsman;
  }

  setIsBowler(bowler) {
    this.bowler = bowler;
  }

  setIsKeeper(keeper) {
    this.isKeeper = keeper;
  }

  setTeamId(teamId) {
    this.teamId = teamId;
  }

  setStatus(status) {
    this.status = status;
  }
}

export default CricketPlayerProfileV1;
