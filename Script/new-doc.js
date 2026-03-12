import fs from "fs"
import path from "path"

const title = process.argv[2]
const section = process.argv[3] || "Ostatni"

if (!title) {
  console.log("Použití: npm run new \"NazevStranky\" Sekce")
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w\-]/g, "")

const dir = path.join("docs", section)
const file = path.join(dir, `${slug}.md`)

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

const content = `# ${title}

## Popis

Krátký popis tématu.

## Příklad

\`\`\`
kód nebo ukázka
\`\`\`

## Poznámky

Další informace.
`

fs.writeFileSync(file, content)

console.log("Vytvořen soubor:", file)