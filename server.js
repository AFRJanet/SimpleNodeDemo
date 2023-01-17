
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  var name = process.env.PET;
  console.log(name);

  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
