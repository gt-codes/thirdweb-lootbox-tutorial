import { getApp } from "./helpers.js";

async function main() {
  const app = await getApp();

  console.log("Deploying pack module...");

  const packModule = await app.deployPackModule({
    name: "Texture Pack",
    sellerFeeBasisPoints: 300,
  });

  console.log(`Deployed pack module with address ${packModule.address}`);
}

try {
  await main();
} catch (error) {
  console.error("Error creating the pack module", error);
  process.exit(1);
}
