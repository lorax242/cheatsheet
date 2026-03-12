# Instalace Git

## 1. Nainstaluj Git

Stáhni: [Git](https://git-scm.com)

Po instalaci otevři terminál a ověř:


```Bash
git ---version
```

## 2. Nastavení Git (jen jednou)

---

```Bash
git config --global user.name "TvojeJmeno"
git config --global user.email "tvuj@email.cz"
```

---

## 3. Stáhni prijekt z GitHubu

V terminálu napiš:

```Bash
git clone https://github.com/"GitHubJmeno"/"NazevRepo".git
```

Vytvoří se složka: `NazevRepo`

---

## 4. Otevři projekt ve VS Code

```bash
code NazevRepo
```

nebo ve VS Code: File → Open Folder

---

## 5. Stáhni závislosti projektu

Protože používáš VitePress: 
```Bash 
npm install
```
 
 ---

## 6. Spusť projekt

```Bash
npm run docs:dev #vytvori lokalni stranku
```

pak otevři: `Lokální web - http://localhost:xxxx`

---

## 7. Jak ukládat změny (zálohování)

Když něco upravíš:

```Bash
git add .
git commit -m "uprava dokumentace"
git push
```

Tím se změny uloží na GitHub.

---

## 8. Na jiném zařízení

Stačí stáhnout nové změny:

```Bash
git pull
```

```mermaid
Jak Git funguje
PC 1
   ↓
git push
   ↓
GitHub
   ↓
git pull
   ↓
PC 2
```

GitHub funguje jako centrální záloha projektu.