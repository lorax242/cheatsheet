# Prace se soubory a slozkami
ash
## Zobrazeni obsahu slozky

```Bash
ls
```
Zobrazeni souboru a slozek v aktualnim adresari.


Uzitecne varianty:

```Bash
ls -l     # detailni seznam
ls -a     # vcetne skrytych souboru
ls -lh    # velikosti v citelnem formatu
```

---

## Zjisteni aktualni slozky

```Bash
pwd
```

Ukaze aktualni cestu v systemu.

Napriklad:

```
/home/uzivatel/Dokumenty
```

---

## Prechod do jine skozky

```Bash
cd skozka
```

Priklady:

```Bash
cd Dokumenty
cd home/uzivarel/Downloads
```


### Specialni znaky

```bash
cd ..     # o uroven bys
cd -      # predchozi slozka
cd ~      # domovska slozka
```

---

## Vytvoreni nove slozky

```Bash
mkdr nova_slozka
```

### Vytvoreni vice slozek

```Bash
mkdr slozka1 slozka2 slozka3
```

---

## Vytvoreni souboru

```Bash
touch soubot.txt
```

Pouziva se hlavne pro vytvoreni noveho souboru.

---

## Kopirovani 

### Kopisovani slozky

```Bash
cp -r slozka kopie_slozka
```

### Kopirovani souboru

```Bash
cp soubor.txt kopie.txt
```

---

## Presun/prejmenovani

### Presun souboru/slozky

```Bash
mv soubor.txt slozka/
```

### Prejmenovani souboru/slozky

```Bash
mv soubor.txt novy.txt
```

---

## Mazani

### Mazani slozky

```Bash
rm soubor.txt
```

### Mazani souboru

```Bash
rm -r slozka
```

!!!Pozor - v terminalu NENI KOS!!!

---

## Zobrazeni souboru

### Zobrazeni souboru

```Bash
cat soubor.txt
```

### Zobrazeni dlouheho souboru

```Bash
less soubor.txt
```
Navigace v `less`:

-`q` - ukonceni

-sipky/PgUp/PgDn - pohyb

---

## Vyhledavani souboru

```Bash
find . -name "soubor.txt"
```

Nebo rychleji:

```Bash
locate soubor.txt
```

## Extra uzitecne prikazy

```Bash
clear     # vycisti terminal
history   # historie prikazu
man ls    # manual k prikazu
tab       # zmacknout pro automaticke doplnovani
```