import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0x63d1DA64dEe964ad3733b2AA54D86071c317b982";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Fuschia",
        description: "A wave of fuschia",
        image: readFileSync("scripts/assets/fuschia.jpeg"),
        properties: {
          rarity: "slightly rare",
          fanciness: 6,
        },
      },
      supply: 40,
    },
    {
      metadata: {
        name: "Mutant",
        description: "Inside a mutant's bloodstream",
        image: readFileSync("scripts/assets/mutant.jpeg"),
        properties: {
          rarity: "slightly rare",
          fanciness: 6,
        },
      },
      supply: 40,
    },
    {
      metadata: {
        name: "Saturn",
        description: "An interessting view of Saturn",
        image: readFileSync("scripts/assets/saturn.jpeg"),
        properties: {
          rarity: "a bit more rare",
          fanciness: 8,
        },
      },
      supply: 15,
    },
    {
      metadata: {
        name: "Snakeskin",
        description: "Very delicate snakeskin",
        image: readFileSync("scripts/assets/snakeskin.jpeg"),
        properties: {
          rarity: "extremely rare!",
          fanciness: 10,
        },
      },
      supply: 5,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
