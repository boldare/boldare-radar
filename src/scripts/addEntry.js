const path = require("path");
const { readFile, writeFile } = require("fs/promises");

const entriesFilePath = path.join(__dirname, "../data", "entries.json");

const quadrantMap = {
  Techniques: 0,
  Tools: 1,
  "Platforms & Services": 2,
  Frameworks: 3,
};

const ringMap = {
  Prototype: 0,
  MVP: 1,
  "PMF/Scaling": 2,
};

async function main({ label, ring, quadrant }) {
  const entriesFile = await readFile(entriesFilePath);

  const entries = JSON.parse(entriesFile);

  // TODO: validate quadrant
  // TODO: validate ring
  // TODO: validate label is unique

  const newEntry = {
    quadrant: quadrantMap[quadrant],
    ring: ringMap[ring],
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
