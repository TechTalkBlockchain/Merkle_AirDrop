# Sample Hardhat Project

Generate a Merkle root from a list of eligible addresses, implement a Solidity contract that verifies claims against this Merkle root, and manage the airdrop process.
git 
Still a Work in Progress
**STEPS INVOLVES**
-Set up a Hardhat project and install necessary packages
-Generate wallet addresses and amounts, saving them in a CSV file.
-Create a Merkle Tree from the generated data and save the Merkle Root and leaves.
-Verify the output files to ensure everything is correct.



**Set up a Hardhat project and install necessary packages:**
npx hardhat init
write smart Contract for ERC20-TOKEN AND AIRDROP.SOL AND COMPILE FOR ARTIFACT AND DEPLOYMENT.

**Generate wallet addresses and amounts, saving them in a CSV file.**
Created CSV File which the airDrop Contract is going to readFrom passing in (addresses, and Amount)

**Create a Merkle Tree from the generated data and save the Merkle Root and leaves.**
Created a Merkle Tree Js to generate and hash the Merkle Root and Leaves in a folder called scripts/merkleTree.js

**Verify the output files to ensure everything is correct.**
to comfirm CSV is read from Merkle try scripts to generate proof run (node scripts/merkleTree.js airdrop.csv)
Ater runing the script a proof.json generates. 
Merkle_Hash is Generated after Running this.
npx hardhat ignition deploy ./ignition/modules/deploy.js --network lisk-sepolia
**After this,**

**Deploy deployToken.js with the Following:**
npx hardhat ignition deploy ./ignition/modules/deploy.js --network lisk-sepolia
Token_Address is generated and is required to be at at the second deployment for AirDrop Contract.
This shows the Token_Address image during deployment. (check folder modules to see deployment Image).

After Deploying deploy.js the Contract for AirDrop deploys for AirDrop Functionalities. Like claiming airDrops for generated Addresses.

========================================== Interaction =========================================

Interaction will be done onchain after Deploying Everything.


@copyright Ponfa Michael Joseph
