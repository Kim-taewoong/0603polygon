const CONTRACT_ADDRESS = "0xA9e018881796Bf2bb2721346807a0e3fb82D99f8"
const META_DATA_URL = "http://localhost:8081/metaNFTs/"

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
    const [owner] = await ethers.getSigners()
    await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
    console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });