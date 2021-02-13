const fs = require('fs');

const nameBuffer = fs.readFileSync('1-json.json');
const meJSON = nameBuffer.toString();
const carter = JSON.parse(meJSON);
carter.name = 'Josh';
carter.age = 36;

const joshJSON = JSON.stringify(carter);
fs.writeFileSync('1-json.json', joshJSON);
