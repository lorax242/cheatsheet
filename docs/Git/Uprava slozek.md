# Práce se složkami v Git (základní tahák)

## 🧠 Základní princip
Git sleduje změny ve složkách a souborech, ale některé operace (kopírování, mazání, přejmenování) je potřeba dělat správně, aby se nezpůsobil problém (např. submodule).

---

## 📁 Přidání nové složky do repozitáře

```bash
git add NAZEV_SLOZKY
git commit -m "pridana slozka"
git push
```

---

## 📄 Kontrola stavu

```bash
git status
```

👉 ukáže:
- nové soubory (untracked)
- změny
- co bude commitováno

---

## 📂 Kopírování složky

```bash
cp -r stara_slozka nova_slozka
```

📌 Příklad:
```bash
cp -r Hodina4 Hodina5
```

### ⚠️ Důležité (velmi častý problém)
Pokud kopíruješ složku, která byla Git repo:

```bash
rm -rf nova_slozka/.git
```

👉 jinak vznikne:
- submodule
- modrá složka
- šipka v editoru

---

## ✏️ Přejmenování složky

### Doporučeno:
```bash
git mv stara_slozka nova_slozka
git commit -m "rename slozky"
git push
```

### Alternativa:
```bash
mv stara_slozka nova_slozka
git add .
git commit -m "rename slozky"
git push
```

---

## ❌ Odstranění složky

### Doporučeno:
```bash
git rm -r NAZEV_SLOZKY
git commit -m "smazana slozka"
git push
```

### Alternativa:
```bash
rm -rf NAZEV_SLOZKY
git add .
git commit -m "smazana slozka"
git push
```

---

## 🔵 Problém: složka je modrá + má šipku

👉 znamená:
**submodule (repo v repu)**

### Příčina:
- složka obsahuje `.git`

---

## 🔧 Oprava submodule

1. Odstranit z indexu:
```bash
git rm --cached NAZEV_SLOZKY
```

2. Smazat `.git` ve složce:
```bash
cd NAZEV_SLOZKY
rm -rf .git
cd ..
```

3. (volitelně) upravit `.gitmodules`:
```bash
cat .gitmodules
```
👉 pokud obsahuje danou složku → ručně odstranit záznam

4. Přidat znovu:
```bash
git add NAZEV_SLOZKY
git commit -m "fix: odstraneni submodule"
git push
```

---

## ⚠️ Důležité poznámky

- `git add .` přidá vše v aktuální složce
- `git commit` ukládá změny lokálně
- `git push` odesílá na GitHub

---

## 🧠 Shrnutí

| Operace        | Příkaz |
|----------------|--------|
| Přidání        | `git add slozka` |
| Kopie          | `cp -r stara nova` |
| Přejmenování   | `git mv stara nova` |
| Smazání        | `git rm -r slozka` |
| Oprava submodule | `git rm --cached + rm .git` |

---

## 💡 Tipy

- vždy používej:
```bash
git status
```

- pozor na:
```bash
rm -rf
```
👉 maže nevratně

- pracuj vždy v hlavním repozitáři

---

## 🎯 Jedna věta na závěr
👉 složka musí být bez `.git`, aby byla normální součást repozitáře