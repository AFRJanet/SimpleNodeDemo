
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  var username = process.env.DOCKER_USERNAME;
  console.log(username);
  
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
