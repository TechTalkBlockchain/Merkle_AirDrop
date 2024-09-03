// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <=0.9.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20("Token", "ERC20_TOKEN") {
    address public owner;

    constructor() {
        owner = msg.sender;
        _mint(msg.sender, 100000e18);
    }

    function mint(uint _amount) external {
        require(msg.sender == owner, "you are not owner");
        _mint(msg.sender, _amount * 1e18);
    }
}
