# VitePress – Návod k používání dokumentace

## Účel dokumentu

Tento dokument slouží jako připomínka, jak funguje projekt ve VitePressu a jak přidávat nové položky do dokumentace.

---

# Jak funguje VitePress

- Každý `.md` soubor = jedna stránka dokumentace
- Struktura složek = struktura obsahu
- Menu vlevo se nastavuje v `.vitepress/sidebar.mjs`
- Statické soubory (PDF, obrázky) patří do `public`

---

# Struktura projektu

docs
├─ .vitepress
│ ├─ config.mjs
│ └─ sidebar.mjs
│
├─ public
│ ├─ pdf
│ └─ images
│
├─ Arduino
├─ Cpp
├─ Git
├─ Ostatni
│
└─ index.md

--- 

# Popis složek

## .vitepress

Obsahuje konfiguraci projektu.

Soubor: `docs/.vitepress/config.mjs`

hlavní nastavení projektu.

Soubor: `docs/.vitepress/sidebar.mjs`

definuje menu vlevo.

Do této složky se nepřidává obsah dokumentace.

---

## index.md

Hlavní stránka dokumentace.

Otevře se při načtení webu.

---

## Obsahové složky

Například:

- Arduino
- Cpp
- Git
- Ostatni

Obsahují stránky dokumentace.

Každý `.md` soubor = jedna stránka.

Příklad:  `docs/Arduino/Libraries/Wire.md`
          `docs/Ostatni/setupVSCode.md`

---

## public

Obsahuje statické soubory.

Používá se pro:

- PDF
- obrázky
- soubory ke stažení

Příklad:  `docs/public/pdf/tahak.pdf`
          `docs/public/images/schema.png`

---

# Postup přidání nové stránky

---

## 1. vytvořit soubor

`docs/Arduino/Libraries/Servo.md`

---

## 2. napsat obsah stránky

Servo

Knihovna pro ovládání servomotoru.

Příklad:

#include <Servo.h>

Servo myServo;

---

## 3. přidat stránku do sidebaru

Soubor: `docs/.vitepress/sidebar.mjs`


Příklad:  `section("Libraries", [
          page("Wire", "/Arduino/Libraries/Wire"),
          page("Servo", "/Arduino/Libraries/Servo")
          ])`

---

# Postup přidání PDF

---

## 1. vložit PDF do public

`docs/public/pdf/navod.pdf`

---

## 2. vytvořit stránku s odkazy

Soubor: `docs/Ostatni/pdf.md`
Obsah:  `PDF dokumenty`

---

## 3. přidat stránku do sidebaru

`section("Ostatní", [
page("PDF dokumenty", "/Ostatni/pdf")
])`

---

# Odkazy ve VitePressu

Odkaz se píše podle cesty od složky `docs`.

Příklad souboru:  `docs/Arduino/Libraries/Wire.md`

Odkaz:  /Arduino/Libraries/Wire
        //(Bez `.md`.)//

---

# Základní Markdown syntax

---

## Nadpis

Nadpis

---

## Podnadpis

Podnadpis

---

## Seznam

položka

další položka

---

## Odkaz

text odkazu

---
# Build projektu

npm run docs:build

Výstup: `.vitepress/dist`

-ulžení změn

---

# Spuštění vývojového serveru

`npm run docs:dev`

Server: `http://localhost:5173`

---

## Export na web

`npx wrangler pages deploy docs/.vitepress/dist`

- tim se pošlou změny na web

---

# Rychlé shrnutí

Přidání nové stránky:

1. vytvořit `.md`
2. napsat obsah
3. přidat do `sidebar.mjs`

Přidání PDF:

1. vložit do `public`
2. vytvořit stránku s odkazy
3. přidat stránku do sidebaru

