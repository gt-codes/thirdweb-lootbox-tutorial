import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x436e78f55d50d1089637e16ae6f47be76cc92bdc";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
