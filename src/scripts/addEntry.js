/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { readFile, writeFile } = require("fs/promises");

const entriesFilePath = path.join(__dirname, "../data", "entries.json");

async function main({ label, ring, quadrant }) {
  const entriesFile = await readFile(entriesFilePath);

  const entries = JSON.parse(entriesFile);

  // TODO: validate quadrant
  // TODO: validate ring

  const newEntry = {
    quadrant: quadrant,
    ring,
    label,
    active: true,
    moved: 0,
  };

  const updateEntries = [...entries, newEntry];

  await writeFile(entriesFilePath, JSON.stringify(updateEntries, null, 2));
}

function parseArgs(args) {
  const [, , label, ring, quadrant] = args;

  if (!label) {
    throw new Error("Missing label");
  }

  if (!ring) {
    throw new Error("Missing ring");
  }

  if (!quadrant) {
    throw new Error("Missing quadrant");
  }

  return { label, ring, quadrant };
}

main(parseArgs(process.argv));
