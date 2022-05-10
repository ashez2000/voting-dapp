// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Election {
  address private admin;
  uint private candidateCount;

  constructor() {
    admin = msg.sender;
    candidateCount = 0;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin);
    _;
  }

  struct Candidate {
    uint uuid;
    string name;
    address ethAdd;
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
    Candidate memory c = Candidate({ name: _name, ethAdd: _ethAdd, uuid: candidateCount });
    candidateMap[candidateCount] = c;
    candidateList.push(c);
    candidateCount++;
  }

  function addVoters(address[] memory voters) public onlyAdmin {
    for(uint i = 0; i < voters.length; i++) {
      Voter memory v = Voter({ uid: voters[i], voted: false });
      voterList[voters[i]] = v;
    }
  }

  function getCandidates() public view returns(Candidate[] memory) {
    return candidateList;
  }
}
