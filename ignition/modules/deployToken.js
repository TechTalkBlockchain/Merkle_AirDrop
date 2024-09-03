
const{ buildModule } = require ("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {

    const erc20T = m.contract("Token");

    return { erc20T };
});

module.exports=TokenModule;
