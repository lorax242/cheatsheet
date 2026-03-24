# U8g2lib – podrobný Markdown dokument s komentáři

## Popis

**U8g2lib** je grafická knihovna pro mikrokontrolery, která slouží k ovládání různých displejů, například:

- OLED
- LCD
- e-paper
- další malé grafické displeje

Používá se hlavně v embedded projektech pro:

- výpis textu
- kreslení jednoduché grafiky
- tvorbu menu
- zobrazení hodnot ze senzorů
- stavové obrazovky zařízení

Knihovna podporuje různé komunikační sběrnice, nejčastěji:

- **I2C**
- **SPI**

Velká výhoda U8g2 je, že obsahuje:

- hodně fontů
- funkce pro kreslení textu i grafiky
- podporu mnoha typů displejů
- jednoduché použití v Arduino projektech

---

## Princip fungování

U8g2 ve variantě **_F_** pracuje s **framebufferem**.

To znamená:

1. nejdřív kreslíš do paměti RAM
2. změny ještě nejsou vidět na displeji
3. až funkcí `sendBuffer()` se celý obsah odešle na displej

Typický postup:

```cpp
u8g2.clearBuffer();
u8g2.drawStr(0, 12, "Ahoj");
u8g2.sendBuffer();
```

### Význam
- `clearBuffer()` → smaže interní obraz v RAM
- `draw...()` → kreslí objekty do RAM
- `sendBuffer()` → přenese obraz na displej

Bez `sendBuffer()` se nic nezobrazí.

---

## Instalace a include

Nejčastější include:

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <U8g2lib.h>
```

### Význam jednotlivých knihoven
- `Arduino.h` → základní Arduino funkce
- `Wire.h` → I2C komunikace
- `U8g2lib.h` → samotná knihovna U8g2

---

## Vytvoření objektu displeje

Příklad pro SH1106 128×64 přes hardwarové I2C:

```cpp
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);
```

### Rozbor názvu
- `U8G2` → knihovna
- `SH1106` → použitý řadič displeje
- `128X64` → rozlišení
- `NONAME` → typ modulu
- `_F_` → full framebuffer
- `HW_I2C` → hardwarové I2C
- `U8G2_R0` → žádné otočení displeje

---

## Rotace displeje

Možnosti otočení:

```cpp
U8G2_R0
U8G2_R1
U8G2_R2
U8G2_R3
```

### Význam
- `U8G2_R0` → normální orientace
- `U8G2_R1` → otočení o 90°
- `U8G2_R2` → otočení o 180°
- `U8G2_R3` → otočení o 270°

Příklad:

```cpp
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R2);
```

---

## Základní inicializace

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

void setup() {
    u8g2.begin();
}

void loop() {
}
```

### Komentář
- `u8g2.begin();` spustí komunikaci s displejem a připraví knihovnu k použití
- po `begin()` už lze kreslit text i grafiku

---

## Souřadnicový systém

U8g2 používá běžný grafický souřadnicový systém:

- `(0,0)` = levý horní roh
- osa **x** roste doprava
- osa **y** roste dolů

U displeje **128×64** platí:

- šířka: `0 až 127`
- výška: `0 až 63`

Příklad:
- `(0,0)` → levý horní roh
- `(64,32)` → přibližný střed displeje

---

## Základní funkce

## 1. Vymazání bufferu

```cpp
u8g2.clearBuffer();
```

### Komentář
Vymaže interní framebuffer v RAM.  
Používá se před novým vykreslením obrazovky, aby se starý obsah nesmíchal s novým.

### Typické použití
```cpp
u8g2.clearBuffer();
```

---

## 2. Odeslání bufferu na displej

```cpp
u8g2.sendBuffer();
```

### Komentář
Pošle celý framebuffer na displej.  
Bez této funkce se nově nakreslený obsah nezobrazí.

### Typické použití
```cpp
u8g2.sendBuffer();
```

---

## 3. Nastavení fontu

```cpp
u8g2.setFont(u8g2_font_ncenB08_tr);
```

### Komentář
Nastaví font, kterým se bude vykreslovat text.

### Důležité
V U8g2 se velikost textu obvykle nemění číslem jako u Adafruit GFX, ale **výběrem jiného fontu**.

### Příklady fontů

```cpp
u8g2.setFont(u8g2_font_ncenB08_tr);     // menší font
u8g2.setFont(u8g2_font_ncenB14_tr);     // větší font
u8g2.setFont(u8g2_font_logisoso32_tr);  // velmi velký font
```

---

## 4. Výpis textu

```cpp
u8g2.drawStr(x, y, "Text");
```

### Komentář
Vykreslí text na zadanou pozici.

### Parametry
- `x` → horizontální pozice
- `y` → vertikální pozice
- `"Text"` → řetězec, který se zobrazí

### Poznámka
U textu je `y` souřadnice **baseline**, tedy základní linky textu, ne horního okraje písmen.

### Příklad
```cpp
u8g2.drawStr(0, 12, "Ahoj");
```

---

## 5. Pixel

```cpp
u8g2.drawPixel(x, y);
```

### Komentář
Vykreslí jeden bod na souřadnicích `(x, y)`.

### Příklad
```cpp
u8g2.drawPixel(10, 10);
```

---

## 6. Čára

```cpp
u8g2.drawLine(x1, y1, x2, y2);
```

### Komentář
Vykreslí čáru mezi dvěma body.

### Parametry
- `(x1, y1)` → počáteční bod
- `(x2, y2)` → koncový bod

### Příklad
```cpp
u8g2.drawLine(0, 0, 127, 63);
```

### Poznámka
Čára je standardně **1 pixel tlustá**.

---

## 7. Obdélník – obrys

```cpp
u8g2.drawFrame(x, y, w, h);
```

### Komentář
Vykreslí obdélník pouze jako obrys.

### Parametry
- `x, y` → levý horní roh
- `w` → šířka
- `h` → výška

### Příklad
```cpp
u8g2.drawFrame(0, 0, 128, 64);
```

---

## 8. Obdélník – výplň

```cpp
u8g2.drawBox(x, y, w, h);
```

### Komentář
Vykreslí vyplněný obdélník.

### Příklad
```cpp
u8g2.drawBox(10, 20, 50, 10);
```

### Typické použití
- progress bar
- podbarvení
- simulace tlusté čáry

---

## 9. Kružnice

```cpp
u8g2.drawCircle(x, y, r);
```

### Komentář
Vykreslí kružnici.

### Parametry
- `x, y` → střed kružnice
- `r` → poloměr

### Příklad
```cpp
u8g2.drawCircle(64, 32, 10);
```

---

## 10. Vyplněná kružnice

```cpp
u8g2.drawDisc(x, y, r);
```

### Komentář
Vykreslí vyplněný kruh.

### Příklad
```cpp
u8g2.drawDisc(64, 32, 8);
```

---

## 11. Bitmapa

```cpp
u8g2.drawXBMP(x, y, w, h, bitmap);
```

### Komentář
Vykreslí bitmapový obrázek.

### Parametry
- `x, y` → pozice obrázku
- `w, h` → rozměry obrázku
- `bitmap` → pole dat obsahující bitmapu

### Poznámka
Bitmapa bývá často uložená v `PROGMEM`.

---

## Kompletní ukázka základních funkcí s komentáři

```cpp
// Vymaže interní framebuffer (RAM), do kterého se kreslí
u8g2.clearBuffer();

// Nastaví font pro vykreslování textu
u8g2.setFont(u8g2_font_ncenB08_tr);

// Vykreslí text na pozici (x, y)
// POZOR: y je baseline textu
u8g2.drawStr(x, y, "Text");

// Vykreslí čáru mezi dvěma body
u8g2.drawLine(x1, y1, x2, y2);

// Vykreslí prázdný obdélník (jen obrys)
u8g2.drawFrame(x, y, w, h);

// Vykreslí vyplněný obdélník
u8g2.drawBox(x, y, w, h);

// Vykreslí kružnici se středem (x, y) a poloměrem r
u8g2.drawCircle(x, y, r);

// Vykreslí bitmapu
u8g2.drawXBMP(x, y, w, h, bitmap);

// Odešle obsah framebufferu na displej
u8g2.sendBuffer();
```

---

## Změna velikosti textu

U8g2 nemá běžně funkci typu `setTextSize()`.  
Velikost textu se mění **výběrem jiného fontu**.

### Příklad
```cpp
u8g2.setFont(u8g2_font_ncenB08_tr);   // menší text
u8g2.setFont(u8g2_font_ncenB14_tr);   // větší text
```

### Shrnutí
- text se zvětšuje změnou fontu
- ne číslem, ale volbou jiného fontu

---

## Tloušťka čáry

U8g2 neumí standardní tloušťku čáry měnit přímo parametrem.  
Běžná čára má tloušťku **1 pixel**.

### Jak udělat tlustší čáru

#### Varianta 1 – více čar pod sebou
```cpp
u8g2.drawLine(0, 10, 50, 10);
u8g2.drawLine(0, 11, 50, 11);
u8g2.drawLine(0, 12, 50, 12);
```

#### Varianta 2 – použít obdélník
```cpp
u8g2.drawBox(0, 10, 50, 3);
```

### Komentář
Použití `drawBox()` je nejjednodušší způsob, jak vytvořit tlustou horizontální nebo vertikální čáru.

---

## Příklady

## 1. Jednoduchý text

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

void setup() {
    u8g2.begin();
}

void loop() {
    u8g2.clearBuffer();                    // smaže starý obsah
    u8g2.setFont(u8g2_font_ncenB08_tr);   // nastaví font
    u8g2.drawStr(0, 12, "Ahoj");          // vykreslí text
    u8g2.sendBuffer();                    // odešle na displej
    delay(1000);
}
```

---

## 2. Text + rámeček + kružnice

```cpp
void loop() {
    u8g2.clearBuffer();

    u8g2.setFont(u8g2_font_ncenB08_tr);
    u8g2.drawStr(5, 12, "SH1106 demo");

    u8g2.drawFrame(0, 0, 128, 64);     // rámeček přes celý displej
    u8g2.drawCircle(64, 32, 10);       // kružnice uprostřed

    u8g2.sendBuffer();
    delay(500);
}
```

### Co to dělá
- vypíše text
- vykreslí obrys celé obrazovky
- přidá kružnici do středu

---

## 3. Progress bar

```cpp
void loop() {
    int progress = 70;

    u8g2.clearBuffer();

    u8g2.drawFrame(10, 25, 100, 10);   // obrys progress baru
    u8g2.drawBox(12, 27, progress, 6); // vyplněná část

    u8g2.sendBuffer();
    delay(500);
}
```

### Komentář
- `drawFrame()` kreslí okraj
- `drawBox()` vyplní část podle hodnoty `progress`

---

## 4. Animace bodu

```cpp
void loop() {
    for(int x = 0; x < 128; x++) {
        u8g2.clearBuffer();      // smaže předchozí snímek
        u8g2.drawPixel(x, 32);   // vykreslí bod uprostřed displeje
        u8g2.sendBuffer();       // zobrazí snímek
        delay(10);               // zpomalí animaci
    }
}
```

### Co to dělá
Bod se pohybuje zleva doprava po středu displeje.

### Důležité
Kdyby tam nebylo `clearBuffer()`, zůstávaly by staré body a vznikla by čára.

---

## 5. Tlustá čára pomocí drawBox

```cpp
void loop() {
    u8g2.clearBuffer();

    u8g2.drawBox(10, 20, 80, 4);   // tlustá horizontální čára

    u8g2.sendBuffer();
    delay(500);
}
```

---

## 6. Více textů na obrazovce

```cpp
void loop() {
    u8g2.clearBuffer();

    u8g2.setFont(u8g2_font_6x10_tr);
    u8g2.drawStr(0, 12, "Teplota: 24 C");
    u8g2.drawStr(0, 26, "Vlhkost: 50 %");
    u8g2.drawStr(0, 40, "Stav: OK");

    u8g2.sendBuffer();
    delay(500);
}
```

---

## Výhody U8g2

- velké množství fontů
- jednoduché kreslení grafiky
- podpora mnoha displejů
- vhodné pro OLED a malé displeje
- stabilní a rozšířená knihovna

---

## Nevýhody U8g2

- varianta s framebufferem má vyšší nároky na RAM
- u malých mikrokontrolerů může být RAM limitující
- text se nemění funkcí `setTextSize()`, ale přes fonty

---

## Typické použití

- měřicí zařízení
- menu v embedded systému
- IoT displeje
- výpis teploty, tlaku, napětí
- stavové obrazovky
- jednoduché uživatelské rozhraní

---

## Časté chyby

### 1. Zapomenuté `sendBuffer()`
Obsah se nakreslí do RAM, ale na displej se neodešle.

### 2. Zapomenuté `clearBuffer()`
Nový obraz se může překreslovat přes starý.

### 3. Špatný typ displeje
Například záměna **SH1106** a **SSD1306**.

### 4. Špatná I2C adresa
Nejčastější bývá:
- `0x3C`
- někdy `0x3D`

### 5. Špatně zvolený font
Text může být příliš velký nebo se nevejde na displej.

---

## Mini tahák

- `u8g2.begin()` → inicializace displeje
- `u8g2.clearBuffer()` → smazání RAM bufferu
- `u8g2.setFont(...)` → nastavení fontu
- `u8g2.drawStr(...)` → text
- `u8g2.drawPixel(...)` → bod
- `u8g2.drawLine(...)` → čára
- `u8g2.drawFrame(...)` → obrys obdélníku
- `u8g2.drawBox(...)` → vyplněný obdélník
- `u8g2.drawCircle(...)` → kružnice
- `u8g2.drawXBMP(...)` → bitmapa
- `u8g2.sendBuffer()` → zobrazení na displeji

---

## Krátký vzorový program

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <U8g2lib.h>

U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

void setup() {
    u8g2.begin();
}

void loop() {
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB08_tr);
    u8g2.drawStr(10, 20, "Ahoj svete");
    u8g2.drawFrame(0, 0, 128, 64);
    u8g2.sendBuffer();
    delay(1000);
}
```

### Co dělá
- inicializuje displej
- smaže buffer
- nastaví font
- zobrazí text
- vykreslí rámeček
- pošle obraz na displej
