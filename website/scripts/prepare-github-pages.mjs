import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../dist/", import.meta.url));
const siteBase = "/ryanantonius-portfolio";

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith(".html") ? [path] : [];
  }));
  return nested.flat();
}

for (const file of await htmlFiles(outputDirectory)) {
  const html = await readFile(file, "utf8");
  const prefixed = html
    .replace(/(href|src|data-image)=(['"])\/(?!\/)/g, `$1=$2${siteBase}/`)
    .replace(/url\(['"]?\/(?!\/)/g, `url(${siteBase}/`);
  await writeFile(file, prefixed);
}
