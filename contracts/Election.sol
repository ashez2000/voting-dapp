// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Election {
  address private admin;

  constructor() {
    admin = msg.sender;
    candidateMap[0] = Candidate({id: 0, name: "James", uuid: "TRV18IT019"});
    candidateMap[1] = Candidate({id: 1, name: "Aswin", uuid: "TRV18IT011"});
    candidateMap[2] = Candidate({id: 2, name: "Tommy", uuid: "TRV18IT015" });

    candidateList.push(candidateMap[0]);
    candidateList.push(candidateMap[1]);
    candidateList.push(candidateMap[2]);
  }

  struct Candidate {
    uint id;
    string name;
    string uuid;
  }

  Candidate[] private candidateList;
  mapping(uint => Candidate) private candidateMap;
  mapping(address => bool) private votersList;

  function getAdmin() public view returns(address) {
    return admin;
  }

  function getCandidates() public view returns(Candidate[] memory) {
    return candidateList;
  }
}
