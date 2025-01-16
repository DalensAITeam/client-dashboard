// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

/** @param {string[]} filenames */
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    () => "tsc -p tsconfig.json --noEmit",
  ],
};
