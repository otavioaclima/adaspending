
const API_KEY = "0-0010-1f5d1d0f-232b-40a3-9215-034b7af295dd-ec2c43cf5dee505e1300c";
const BASE_URL = 'https://api.cardanoscan.io/api/v1';

async function testFetch() {
  const response = await fetch(`${BASE_URL}/network/state`, {
    headers: {
      'apiKey': API_KEY,
    },
  });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

testFetch();
