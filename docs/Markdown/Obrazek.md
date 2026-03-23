# Vložení SVG obrázku do Markdown (VitePress)

## 1. Umístění obrázku
Ulož obrázek do složky:

Příklad:
`public/---/obrazek.svg`

Doporučení:
- nepoužívej mezery v názvech složek
- dodržuj velikost písmen
- používej přehlednou strukturu složek

---

## 2. Vložení obrázku do Markdown

Základní (Markdown):
```MarkDown
![popis](/Obrazky/---/Obrazek.svg)
```

Použij HTML zápis:
```HTML
<img src="/obrazek.svg" style="max-width:400px;"> 
```

## 3. Co to dělá
- `src="/obrazek.svg"` → cesta k obrázku (bez `"public"`)
- `max-width:400px` → velikost obrazku

---

## 4. Úprava velikosti obrázku

Pevná velikost:
```HTML
<img src="/Obrazky/---/Obrazek.svg" style="width:600px;">
```
Responzivní velikost:
```HTML
<img src="/Obrazky/---/Obrazek.svg" style="max-width:100%; height:auto;">
```

Doporučená kombinace:
```HTML
<img src="/Obrazky/---/Obrazek.svg" style="width:100%; max-width:600px; height:auto;">
```
---

## 4. Vystředění obrázku
```HTML
<div style="text-align:center;">
  <img src="/Obrazky/---/Obrazek.svg">
</div>
```
---

## 6. Pozadí a rámeček kolem obrázku
```HTML
<div style="background:#f3f3f3; padding:12px; border-radius:10px; width:fit-content; margin:0 auto;">
  <img src="/Obrazky/---/Obrazek.svg" style="width:100%; max-width:600px; height:auto;">
</div>
```
---

## 7. Klikací obrázek (zvětšení po kliknutí)
```HTML
<div style="text-align:center;">
  <a href="/Obrazky/---/Obrazek.svg" target="_blank">
    <img src="/Obrazky/---/Obrazek.svg" style="max-width:600px; width:100%; height:auto;">
  </a>
</div>
```
---

## 8. custom.css a index.ts
Pro globální stylování (rámečky, velikosti, dark mode) se používá:
- custom.css → definice stylů
- index.ts → načtení stylů


---

## ⚠️ 9. Časté chyby
- ❌ src="public/obrazek.svg"
- ✅ src="/obrazek.svg"
- - použití public v cestě k obrázku
- špatná velikost písmen ve složkách
- mezery v názvech složek
- obrázek není ve složce public
- příliš velká pevná šířka
- SVG má pevně nastavenou velikost

