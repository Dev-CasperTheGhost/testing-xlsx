import { utils } from "xlsx";
import { readFile, writeFile } from "node:fs/promises";

async function generateCSV() {
  const JSON_DATA = JSON.parse(await readFile("data.json", "utf-8"));

  console.log(JSON_DATA);
  const sheet = utils.json_to_sheet(JSON_DATA, {});
  console.log(sheet);
  const csv = utils.sheet_to_csv(sheet);
  console.log(csv);
  writeFile("data.csv", csv);
}
generateCSV();
