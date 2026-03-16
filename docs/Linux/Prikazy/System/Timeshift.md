# Timeshift – nastavení a používání

Timeshift je nástroj pro snapshoty systému Linux.

Umožňuje vrátit systém do předchozího stavu například když:

- se nepovede update
- rozbije se kernel
- systém přestane bootovat
- rozbije se konfigurace

Timeshift obnovuje **systémové soubory**, ale běžně **neobnovuje /home**.

---

# Spuštění Timeshift

Otevři terminál:

```Bash
sudo timeshift-gtk
```

nebo z menu:

```
Menu → Administration → Timeshift
```

---

# Typ snapshotu

Timeshift nabízí dvě možnosti:


`RSYNC`
`BTRFS`


Pro běžný ext4 systém zvol:


`RSYNC`


---

# Výběr disku

Vyber disk, kam se budou ukládat snapshoty.

Obvykle:


interní disk


Pokud máš hodně místa, můžeš použít i externí disk.

---

# Doporučené nastavení snapshotů

```
| typ snapshotu | počet |
|---|---|
Hourly | 0 |
Daily | 5 |
Weekly | 3 |
Monthly | 2 |
Boot | 3 |
```

To znamená:

- posledních **5 dní**
- poslední **3 týdny**
- poslední **2 měsíce**
- poslední **3 boot snapshoty**

---

# Nastavení /home

Timeshift se zeptá, zda zálohovat `/home`.

Doporučení:


NEZAŠKRTÁVAT /home


Timeshift je určený hlavně pro systémové soubory:

```
/usr
/boot
/lib
/etc
```


Pro osobní data je lepší použít jiný backup.

---

# Ruční snapshot

Před větší změnou můžeš vytvořit snapshot ručně:

```Bash
sudo timeshift --create --comments "before system update"
```

nebo v GUI tlačítkem:


`Create`

---

# Automatický snapshot před upgrade

Můžeš vytvořit alias pro bezpečný upgrade.

Otevři konfiguraci shellu:

```Bash
nano ~/.bashrc
```

Přidej na konec:

```Bash
alias safe-upgrade='sudo timeshift --create --comments "before update" && sudo apt update && sudo apt upgrade'
```

Použití:

```bash
safe-upgrade
```

Tím se:

1. vytvoří snapshot
2. provede update systému

---

# Obnovení systému

Pokud se systém rozbije:

1. nabootuj **Live USB Linux Mint**
2. otevři terminál

```Bash
sudo timeshift-launcher
```

3. vyber snapshot
4. klikni **Restore**

Po restartu bude systém vrácen do původního stavu.

---

# Doporučená kombinace záloh
```
| nástroj | účel |
|---|---|
Timeshift | systém |
rsync / Deja Dup | osobní soubory |
Git | projekty a kód |
```
---

# Výhoda Timeshift

Bez Timeshiftu může oprava systému trvat desítky minut.

S Timeshiftem:

```Bash
restore snapshot
reboot
```

Celá oprava obvykle trvá **2–5 minut**.