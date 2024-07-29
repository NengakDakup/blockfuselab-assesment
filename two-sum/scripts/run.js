async function main() {
    const [deployer] = await ethers.getSigners();

    const TwoSum = await ethers.getContractFactory("TwoSum");
    const twoSum = await TwoSum.deploy();

    twoSum.waitForDeployment();
    let address = await twoSum.getAddress();
    console.log("TwoSum contract deployed to:", address);

    // Example data
    const nums = [2, 7, 11, 15];
    const target = 9;

    console.log(`Input array: `, nums);
    console.log(`Expected Sum: `, target);


    // Finding the indices
    const result = await twoSum.findTwoSum(nums, target);
    console.log(`Indices: ${result[0].toString()}, ${result[1].toString()}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
