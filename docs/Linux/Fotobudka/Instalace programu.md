# Kompletní manuál: Instalace a nastavení Photobooth na Linuxu (Docker)

Tento dokument obsahuje ucelený postup pro bezproblémové zprovoznění open-source aplikace Photobooth pomocí Dockeru. Zahrnuje také úpravu portů pro vyřešení konfliktů s existujícími webovými servery (např. Apache) a finální konfiguraci fotoaparátu.

## 1. Příprava systému a instalace závislostí

Nejprve je nutné systém aktualizovat a nainstalovat nástroje pro stažení kódů a běh kontejnerů.

```bash
# Aktualizace seznamu balíčků
sudo apt update && sudo apt upgrade -y

# Instalace Gitu, Dockeru a nového Compose pluginu (verze v2)
sudo apt install git docker.io docker-compose-v2 -y

# Přidání uživatele do skupiny docker (vyžaduje odhlášení/restart pro plnou funkčnost bez sudo)
sudo usermod -aG docker $USER

## 2. Stažení zdrojových kódů aplikace

Aplikaci sestavujeme přímo z oficiálního repozitáře, abychom měli k dispozici nejnovější verzi a konfigurační soubory.
```
## 2. Přechod do domovské složky
```bash
cd ~
```


## 3. Stažení repozitáře Photobooth
repozitar: [https://github.com/PhotoboothProject/photobooth.git](https://github.com/PhotoboothProject/photobooth.git)
```bash
git clone https://github.com/PhotoboothProject/photobooth.git
```


## 4. Přesun do pracovní složky
```bash
cd ~/photobooth
```


## 5. Architektura a konfigurace Dockeru

Fotokoutek využívá moderní webovou aplikaci Photobooth (autor Andi0b). Celé prostředí je definováno v souboru `docker-compose.yml`. Pro bezproblémové propojení s hardvirem, správný přenos souborů a dostatek výkonu pro 32.5Mpx snímač Canonu R7 musí konfigurace vypadat přesně takto:

```bash
docker-compose.yml
``` 



```YAML
version: "3.9"

services:
  photobooth:
    privileged: true
    user: "root"
    build: .
    ports:
      - "8080:80"
      - "443:443"
    devices:
      - "/dev/bus/usb:/dev/bus/usb"
    environment:
      - COMPOSER_VERSION=2
      - PHP_MEMORY_LIMIT=1024M
      - PHP_MAX_EXECUTION_TIME=60
```

### Klíčové parametry konfigurace:

1. **`privileged: true`**: Uděluje kontejneru rozšířená práva k hostitelskému systému, což je nezbytné pro přímé řízení fotoaparátu.
    
2. **`user: "root"`**: Zajišťuje, že webový server uvnitř kontejneru běží s nejvyššími právy a generované soubory v `data/tmp/` a `data/images/` nebudou blokovány linuxovými oprávněními.
    
3. **`devices`**: Mapuje celou USB sběrnici hostitele přímo do vnitřního prostředí Dockeru.
    
4. **`PHP_MEMORY_LIMIT=1024M`**: Zásadní nastavení pro zpracování fotografií ve vysokém rozlišení. Výchozí limit (128M/256M) při dekompresi 32.5Mpx snímků z Canonu R7 způsobí pád PHP procesu (chyba ve fázi _Processing_). Navýšení na 1024M (1 GB) garantuje stabilní běh.
    
5. **`PHP_MAX_EXECUTION_TIME=60`**: Prodlužuje čas na zpracování jedné fotky / koláže na 60 sekund, aby proces neskončil předčasným vypršením časového limitu (Timeout).
## 6. Sestavení a první spuštění kontejneru

Nyní aplikaci sestavíme a spustíme. Spouštíme ji s právy administrátora, abychom předešli chybám s oprávněními (např. `permission denied` u `docker.sock`).

```bash
# Sestavení na míru systému a spuštění na pozadí (-d)
sudo docker compose up --build -d
```

_Tento krok trvá několik minut. Po úspěšném dokončení terminál vypíše zelené `Started`._

## 7. Přístup k aplikaci a administraci

Fotobudka nyní běží na novém portu. V prohlížeči (na stejném počítači) otevři:

- **Zobrazení fotobudky:** `http://localhost:8080`
    
- **Administrace (Nastavení):** `http://localhost:8080/admin`
    

## 8. Nastavení fotoaparátu (zrcadlovky) v administraci

Pro připojení reálného fotoaparátu (např. přes USB) namísto běžné webkamery, je nutné provést změnu v administraci:

1. Otevři adresu `http://localhost:8080/admin`.
    
2. V levém menu přejdi do sekce **Configuration** -> **Cameras** (nebo jen **Cameras**).
    
3. V nastavení zdroje obrazu (obrazového vstupu) přepni režim z Webkamery na **`gphoto2`**.
    
4. Sjeď na konec stránky a klikni na **Save** (Uložit).
    

_Poznámka pro samotný fotoaparát: Musí mít vypnutý úsporný režim (Auto Power Off) a USB připojení by mělo být v režimu PTP / PC connect._

## 9. Správa a ovládání fotobudky 

Pro ovládání běhu aplikace je **vždy nutné být ve složce s projektem** (`cd ~/photobooth`). Z důvodu prevence před chybou `failed switching to "root"` uvnitř kontejneru se **vyhýbej příkazům `stop` a `start`**.

Místo toho používej výhradně příkazy pro úplné smazání a znovuvytvoření kontejneru (uživatelská data a nastavení fotobudky zůstanou bezpečně uložena na disku):

- **Bezpečné vypnutí fotobudky:**
    



```bash
sudo docker compose down
```

- **Nové zapnutí fotobudky (např. na další akci):**
    



```bash
sudo docker compose up -d
```

## 10. Odstraňování problémů (Troubleshooting)

### A. Aplikace hlásí „Nenalezena žádná kamera“

1. Ověřte, zda Linux fyzicky vidí připojené USB zařízení zadáním příkazu `lsusb` v terminálu notebooku. V seznamu musíte vidět řádek `Canon Inc.`.
    
2. Pokud zařízení v `lsusb` chybí, vyměňte USB-C kabel za jiný (musí jít o plnohodnotný **datový** kabel, nikoliv pouze o nabíjecí kabel bez datových pinů).
    
3. Vyzkoušejte, zda na foťák vidí samotný Docker kontejner pomocí příkazu:
    
    
    
    ```bash
    sudo docker exec -it photobooth-photobooth-1 gphoto2 --auto-detect
    ```
    

### B. Odpočet proběhne, ale po fázi "Processing" aplikace spadne

- **Příčina**: Nedostatek paměti PHP nebo chybějící oprávnění pro složku s obrázky.
    
- **Řešení**:
    
    1. Zkontrolujte, zda máte v `docker-compose.yml` správně zapsaný řádek `PHP_MEMORY_LIMIT=1024M`.
        
    2. Snižte rozlišení na foťáku z plného 32Mpx (L) na S1 (12Mpx) nebo S2 (8Mpx). Na výsledné fotky a tisk formátu 10×15 cm to má nulový vliv, ale drasticky to uleví procesoru a paměti notebooku.
        
    3. Opravte oprávnění složek na hostiteli:
        
        Bash
        
        ```
        sudo chmod -R 777 ~/photobooth
        ```
        

### C. Chyba `PTP Device Busy` nebo `I/O in progress`

- **Příčina**: Fotoaparát má aktivní autofokus a v šeru nedokázal potvrdit zaostření, nebo je jeho USB rozhraní blokováno jiným systémovým procesem.
    
- **Řešení**: Přepněte objektiv na **MF (Manuální ostření)** a restartujte fotoaparát vypínačem na těle, aby se vyčistila vyrovnávací paměti PTP rozhraní.