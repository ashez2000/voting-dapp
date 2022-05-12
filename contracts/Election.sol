// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Election {
  address private admin;
  uint private candidateCount;
  bool private start;
  bool private end;
  enum status {INIT, LIVE, OVER} status private electionStatus;

  constructor() {
    admin = msg.sender;
    candidateCount = 0;
    electionStatus = status.INIT;
    start = false;
    end = false;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin);
    _;
  }

  struct Candidate {
    uint uuid;
    string name;
    address ethAdd;
    uint voteCount;
  }

  struct Voter {
    address uid;
    bool voted;
  }

  Candidate[] private candidateList;
  mapping(uint => Candidate) private candidateMap;
  mapping(address => Voter) public voterList;

  function getAdmin() public view returns(address) {
    return admin;
  }

  function addCandidate(string memory _name, address _ethAdd) public onlyAdmin {
    require(electionStatus == status.INIT);

    Candidate memory c = Candidate({ name: _name, ethAdd: _ethAdd, uuid: candidateCount, voteCount: 0 });
    candidateMap[candidateCount] = c;
    candidateList.push(c);
    candidateCount++;
  }

  function addVoters(address[] memory voters) public onlyAdmin {
    require(electionStatus == status.INIT);

    for(uint i = 0; i < voters.length; i++) {
      Voter memory v = Voter({ uid: voters[i], voted: false });
      voterList[voters[i]] = v;
    }
  }

  function getCandidates() public view returns(Candidate[] memory) {
    return candidateList;
  }

  function vote(uint id) public {
    require(electionStatus == status.LIVE);

    require(voterList[msg.sender].uid != address(0));
    require(voterList[msg.sender].voted == false);

    candidateList[id].voteCount++;
    voterList[msg.sender].voted = true;
  }

  function startElection() public onlyAdmin {
    require(start == false);

    electionStatus = status.LIVE;
    start = true;
  }

  function endElection() public onlyAdmin {
    require(start == true);
    require(end == false);

    electionStatus = status.OVER;
    end = true;
  }

  function getElectionStatus() public view returns(status) {
    return electionStatus;
  }
}
