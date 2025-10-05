import { Dusa } from 'dusa';
import * as fs from 'node:fs';

const inputText = fs.readFileSync("poetry.du", {encoding:"utf8"});
const inputParsed = new Dusa(inputText).solution;

for (const cf of inputParsed.lookup('line')) {
  const [num, text] = cf;
  console.log(text);
}
  

