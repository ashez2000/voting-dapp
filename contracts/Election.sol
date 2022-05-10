// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Election {
  address private admin;

  constructor() {
    admin = msg.sender;
  }

  function getAdmin() public view returns(address) {
    return admin;
  }
}
