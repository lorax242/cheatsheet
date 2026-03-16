# Git – základní příkazy a workflow

Poznámky k základním příkazům Git pro práci s projektem a GitHubem.

---

# Obsah

- [Git – základní příkazy a workflow](#git--základní-příkazy-a-workflow)
- [Obsah](#obsah)
- [Inicializace repozitáře](#inicializace-repozitáře)
  - [Popis](#popis)
  - [Technicky](#technicky)
- [Staging area](#staging-area)
  - [Popis](#popis-1)
  - [Význam tečky](#význam-tečky)
  - [Přidání jednoho souboru](#přidání-jednoho-souboru)
- [Commit](#commit)
  - [Popis](#popis-2)
  - [Parametry](#parametry)
  - [Příklad historie](#příklad-historie)
- [Branches](#branches)
  - [Popis](#popis-3)
  - [Příklad](#příklad)
- [Remote repozitář](#remote-repozitář)
  - [Popis](#popis-4)
  - [Parametry](#parametry-1)
  - [Kontrola remote](#kontrola-remote)
- [Push](#push)
  - [Popis](#popis-5)
  - [Parametry](#parametry-2)
- [Pull / Fetch / Clone](#pull--fetch--clone)
  - [Clone](#clone)
  - [Pull](#pull)
  - [Fetch](#fetch)
- [Diagram práce s GitHubem](#diagram-práce-s-githubem)
- [Základní workflow](#základní-workflow)
  - [První nastavení projektu](#první-nastavení-projektu)
  - [Běžná práce](#běžná-práce)
- [Typické chyby začátečníků](#typické-chyby-začátečníků)
  - [1. Zapomenutý commit](#1-zapomenutý-commit)
  - [2. Zapomenutý push](#2-zapomenutý-push)
  - [3. Konflikty](#3-konflikty)
- [Odkazy](#odkazy)

---

# Inicializace repozitáře

```
git init
```

## Popis

Vytvoří v aktuální složce nový Git repozitář.

Git začne sledovat změny souborů v projektu.

## Technicky

Vytvoří skrytou složku:

```
.git
```

Struktura projektu:

```
projekt/
  main.c
  test.c
```

po inicializaci:

```
projekt/
  .git/
  main.c
  test.c
```

---

# Staging area

```
git add .
```

## Popis

Přidá změněné soubory do **staging area** (přípravná oblast pro commit).

Git workflow:

```
working directory -> staging area -> commit
```

## Význam tečky

```
.
```

znamená:

```
aktuální složka + všechny podsložky
```

## Přidání jednoho souboru

```
git add main.c
```

---

# Commit

```
git commit -m "Prvni verze projektu"
```

## Popis

Uloží aktuální změny do historie projektu.

Commit je **snapshot projektu v určitém čase**.

## Parametry

| parametr | význam |
|--------|--------|
| `-m` | message (popis změny) |

## Příklad historie

```
commit 1 -> Prvni verze
commit 2 -> Pridany login
commit 3 -> Oprava chyby
```

Každý commit má vlastní **hash ID**.

---

# Branches

```
git branch -M main
```

## Popis

Nastaví hlavní větev projektu na:

```
main
```

Git umožňuje pracovat s více větvemi současně.

## Příklad

```
main
 ├─ feature-login
 └─ feature-api
```

Vývoj probíhá ve větvích a později se slučuje.

---

# Remote repozitář

```
git remote add origin https://github.com/TVUJ-UCET/skola-kody.git
```

## Popis

Propojí lokální projekt s repozitářem na GitHubu.

## Parametry

| část | význam |
|-----|------|
| `remote` | práce se vzdáleným repozitářem |
| `add` | přidání vzdáleného repo |
| `origin` | název repozitáře |
| URL | adresa GitHub repo |

## Kontrola remote

```
git remote -v
```

---

# Push

```
git push -u origin main
```

## Popis

Nahraje změny z lokálního repozitáře na GitHub.

## Parametry

| část | význam |
|-----|------|
| `push` | odeslat změny |
| `origin` | vzdálený repozitář |
| `main` | větev |
| `-u` | nastaví výchozí tracking |

Po prvním použití:

```
git push
```

---

# Pull / Fetch / Clone

## Clone

```
git clone https://github.com/uzivatel/projekt.git
```

Stáhne celý repozitář z GitHubu.

Používá se při prvním získání projektu.

---

## Pull

```
git pull
```

Stáhne změny z GitHubu **a rovnou je sloučí s lokálním projektem**.

---

## Fetch

```
git fetch
```

Stáhne změny z GitHubu, ale **nesloučí je**.

Používá se pro kontrolu změn.

---

# Diagram práce s GitHubem

```
         GitHub
           │
           │ git push
           │
      remote repository
           │
           │ git pull
           │
      local repository
           │
           │ git add
           │
      staging area
           │
           │ git commit
           │
      working directory
```

---

# Základní workflow

## První nastavení projektu
Je potreba otevrit prikazovy radek v dane slozce, kterou chceme pridat na GitHub.

```
git init
git add .
git commit -m "Prvni verze"
git branch -M main
git remote add origin URL
git push -u origin main
```

---

## Běžná práce

před prací:

```
git pull
```

po změnách:

```
git add .
git commit -m "popis zmen"
git push
```

---

# Typické chyby začátečníků

## 1. Zapomenutý commit

změníš soubor, ale neuděláš commit

```
git add .
git commit -m "popis"
```

---

## 2. Zapomenutý push

commit je pouze lokálně.

```
git push
```

---

## 3. Konflikty

vznikají pokud:

- dva lidé upraví stejný soubor
- nebo pracuješ na dvou počítačích

řešení:

```
git pull
```

a vyřešit konflikt v souboru.

---

# Odkazy

Git dokumentace

https://git-scm.com/docs

GitHub

https://github.com

Git tutorial

https://git-scm.com/docs/gittutorial