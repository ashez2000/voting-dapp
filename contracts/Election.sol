// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Election {
  address private admin;
  uint private candidateCount;
  bool private start;
  bool private end;
  enum status {INIT, LIVE, OVER} status private electionStatus;
  string electionTitle;
  string electionOrganization;

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
    string uuid;
    string name;
    string party;
    uint voteCount;
  }

  struct Voter {
    address uid;
    bool voted;
  }

  Candidate[] private candidateList;
  mapping(string => Candidate) private candidateMap;
  mapping(address => Voter) public voterList;

  function getAdmin() public view returns(address) {
    return admin;
  }

  function addCandidate(string memory _name, string memory _party, string memory _uuid) public onlyAdmin {
    require(electionStatus == status.INIT);

    Candidate memory c = Candidate({ name: _name, party: _party, uuid: _uuid, voteCount: 0 });
    candidateCount++;

    candidateMap[_uuid] = c;
    candidateList.push(c);
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

  function vote(string memory id) public {
    require(electionStatus == status.LIVE);

    require(voterList[msg.sender].uid != address(0));
    require(voterList[msg.sender].voted == false);

    candidateMap[id].voteCount++;
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

  function setElectionDetails(string memory title, string memory org) public onlyAdmin {
    require(electionStatus == status.INIT);
    electionTitle = title;
    electionOrganization = org;
  }

  function getElectionDetails() public view returns(string memory, string memory, status) {
    return (electionTitle, electionOrganization, electionStatus);
  }
}
