# Přidání nové stránky přímo do sekce Arduino pomocí příkazu

Tento postup umožňuje vytvořit nový dokument v konkrétní sekci pomocí jednoho příkazu.

---

# 1. Vytvoření skriptu

V kořeni projektu vytvoř složku: `scripts`
a soubor: `scripts/new-doc.js`

---

# 2. Obsah skriptu

```javascript
import fs from "fs"
import path from "path"

const title = process.argv[2]
const section = process.argv[3] || "Arduino"

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

Krátký popis.

## Příklad

\`\`\`
kód nebo ukázka
\`\`\`

## Poznámky

Další informace.
```

fs.writeFileSync(file, content)

console.log("Vytvořen soubor:", file)


---

## 3. Úprava package.json

Do `package.json přidej` script:    

```JSON
{
  "scripts": {
    "new": "node scripts/new-doc.js"
  }
}
```
---

## 4. Použití pro sekci Arduino

V terminálu spusť: `npm run new "Servo knihovna" Arduino`
Vytvoří se soubor: `docs/Arduino/servo-knihovna.md`

---

## 5. Použití pro podsekci

Například Libraries: `npm run new "Servo knihovna" Arduino/Libraries`
Vytvoří se: `docs/Arduino/Libraries/servo-knihovna.md`

---

## 6. Další příklady

`npm run new "OLED display" Arduino/Display`
`npm run new "Git commit" Git`

---

## 7. Další postup

1. Po vytvoření stránky:
2. uprav obsah
3. přidej stránku do sidebaru
4. commitni změny

```
git add .
git commit -m "add new doc"
git push
```