import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("MyToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("MyToken");

    const defaultAdmin = (await ethers.getSigners())[0].address;
    const pauser = (await ethers.getSigners())[1].address;
    const minter = (await ethers.getSigners())[2].address;

    const instance = await upgrades.deployProxy(ContractFactory, [defaultAdmin, pauser, minter]);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("MyToken");
  });
});
