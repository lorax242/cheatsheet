# 📚 VÝPISKY – TERAPEUTICKÉ PŘÍSTROJE

---

## 1) Testování defibrilátorů

### ⚡ Princip
- defibrilátor slouží k **ukončení fibrilace komor**
- výboj vzniká vybitím **nabitého kondenzátoru**
- cílem je **depolarizovat myokard → obnovení rytmu**

### 📊 Důležité hodnoty
- energie:
  - monofázický: až **360 J**
  - bifázický: **120–200 J**
- napětí: cca **2–5 kV**
- proud: desítky A
- délka impulzu: **5–10 ms**
- odpor pacienta: **50–100 Ω**

### 🔄 Monofázický vs. bifázický výboj
- **Monofázický**
  - proud teče **jedním směrem**
  - vyšší energie → větší poškození tkáně
  - dnes se používá méně

- **Bifázický**
  - proud změní směr (tam + zpět)
  - účinnější při nižší energii
  - menší poškození myokardu
  - dnes standard

### ✔️ Co se testuje
- dodaná energie (J)
- čas nabíjení (sekundy)
- funkce synchronizace (kardioverze – R vlna)
- stav baterie
- elektrody (kontakt, impedance)

### ⚠️ Bezpečnost
- správné přiložení elektrod
- testování na umělé zátěži (ne na pacientovi)

---

## 2) Programátor kardiostimulátorů

### ⚙️ Princip
- zařízení pro **nastavení implantovaného kardiostimulátoru**
- komunikace probíhá **telemetricky (bezdrátově)**

### 📊 Nastavované parametry
- frekvence: **30–150 imp/min (≈70)**
- amplituda: **2–10 V**
- proud: **10–60 mA**
- šířka pulzu: **≈1 ms**
- AV zpoždění: **≈120 ms**
- refrakterní doba: **≈300 ms**

---

### 🧠 Další parametry (z protokolu)
- **rate** → základní stimulační frekvence :contentReference[oaicite:1]{index=1}  
- **maximum pacing rate** → max. povolená frekvence :contentReference[oaicite:2]{index=2}  
- **LV protection period**
  - ochranná doba komory po stimulaci :contentReference[oaicite:3]{index=3} 

---

### 🧠 Co znamenají pojmy
- **AV zpoždění**
  - čas mezi aktivací síní a komor
  - simuluje fyziologické vedení vzruchu

- **Refrakterní doba**
  - období, kdy KS nereaguje na signály
  - zabrání falešné stimulaci

- **Citlivost**
  - schopnost zachytit vlastní aktivitu srdce

---

## 🫀 NASPE/BPEG kód – přehled

| Pozice | I (Chamber Paced) | II (Chamber Sensed) | III (Response to Sensing) | IV (Rate Modulation) | V (Multisite Pacing) |
|--------|------------------|---------------------|----------------------------|----------------------|----------------------|
| Význam | Stimulovaná dutina | Snímaná dutina | Odezva na snímání | Modulace frekvence | Vícebodová stimulace |
| O      | žádná | žádná | žádná | žádná | žádná |
| A      | síň | síň | — | — | síň |
| V      | komora | komora | — | — | komora |
| D      | síň + komora | síň + komora | kombinace (I + T) | — | síň + komora |
| I      | — | — | inhibice | — | — |
| T      | — | — | spouštění | — | — |
| R      | — | — | — | adaptace frekvence | — |

  - Odkaz na tabulku: [Kodove oznaceni kardiostinulátorů](https://litfl.com/pacemaker-rhythms-normal-patterns/)

---

### 🧠 Rychlá orientace
- I = kde stimuluje  
- II = kde snímá  
- III = co udělá  
- IV = přizpůsobení zátěži  
- V = více míst stimulace

---

##  Odezva kardiostimulátoru (NASPE/BPEG – 3. pozice)

Udává, **jak kardiostimulátor reaguje na vlastní aktivitu srdce (snímaný signál)**.

---

#### 🔹 I – Inhibice (Inhibited)
- pokud KS zachytí vlastní srdeční aktivitu → **nevysílá impuls**
- „utlumí se“

##### 💡 Význam
- srdce pracuje samo → KS nezasahuje
- šetří baterii
- zabraňuje zbytečné stimulaci

##### 📌 Příklad
- pacient má vlastní rytmus → KS čeká
- když rytmus vypadne → začne stimulovat

👉 nejčastější režim (**on demand**)

---

#### 🔹 T – Spouštění (Triggered)
- pokud KS zachytí signál → **vyšle stimulační impuls**

##### 💡 Význam
- využívá se pro synchronizaci
- KS „kopíruje“ aktivitu srdce

##### 📌 Příklad
- zachytí P vlnu → vyšle impuls do komory

👉 méně používané

---

#### 🔹 D – Duální (Dual = I + T)
- kombinuje:
  - **inhibici**
  - **spouštění**

##### 💡 Význam
- KS se chová podle situace:
  - někdy inhibuje
  - někdy spouští

##### 📌 Příklad
- pokud je aktivita správná → neinhibuje
- pokud je potřeba → synchronizuje komory

👉 nejmodernější a nejpoužívanější (např. DDD režim)

---

#### 🧠 Rychlé zapamatování
- **I = Inhibit → zastaví se**
- **T = Trigger → spustí impuls**
- **D = Dual → obojí**

---

### ✔️ Funkce
- změna parametrů po implantaci
- ukládání dat (počet stimulací, inhibice)
- diagnostika

---

## 3) Test externího kardiostimulátoru

### ⚡ Princip
- generuje impulzy → **vyvolá kontrakci srdce**
- používá se při poruchách rytmu

### 📊 Hodnoty

#### 📊 Reálné hodnoty (z protokolu)
- amplituda: **0–12 V** 
- šířka pulzu: **0,05–1 ms**   
- frekvence: **40–180 ppm**  
- citlivost: **0,2–5 mV**  

#### 🧠 Další poznatky
- energie impulsu závisí na:
  - napětí
  - délce pulzu
  - impedanci  
- např.: **≈63 µWs (7,5 V, 1 ms)** 

#### ⚙️ Nastavitelné prvky
- amplituda
- frekvence (ppm)
- šířka pulzu
- citlivost
- overdrive frekvence

#### Nepřímá stimulace (transkutánní)
- napětí: **50–300 V**
- proud: **50–300 mA**
- nevýhoda: bolest, stimulace svalů

#### Přímá stimulace (endokardiální)
- proud: **10–60 mA**
- frekvence: **30–150 imp/min**
- šířka pulzu: **≈1 ms**

### 🧠 Typy stimulace
- **neřízená**
  - pevná frekvence (~70/min)
  - nezohledňuje vlastní rytmus

- **řízená („on demand“)**
  - reaguje na aktivitu srdce
  - stimuluje jen když je potřeba

### ✔️ Co se testuje
- amplituda impulzů
- frekvence
- stabilita signálu
- správná reakce na EKG (inhibice)
- tzv. **capture** (zda impuls vyvolá kontrakci)

---

## 4) Elektrokoagulace

### ⚡ Princip
- vysokofrekvenční proud → **zahřívá tkáň**
- dochází ke **koagulaci bílkovin → zástava krvácení**

### 📊 Hodnoty
- frekvence: **stovky kHz – MHz**
- výkon: jednotky až stovky W
- teplota:
  - koagulace: **60–100 °C**

---

### ⚡ Režimy elektrokoagulace

---

#### 1) Řezací režim (CUT)
- **kontinuální vysokofrekvenční signál (sinusový průběh)**  
- vysoká hustota energie  
- → tkáň se **odpaří (vaporizace buněk)**

##### Charakteristika
- hladký, čistý řez
- minimální koagulace okrajů
- větší krvácení
- dochází k **explozi buněk vlivem odpaření intracelulární tekutiny**  

##### 📊 Hodnoty
- napětí: **stovky V**  
- proud: **stovky mA až jednotky A**  

---

#### 2) Koagulační režim (COAG)
- **přerušovaný (pulzní) signál s pauzami**  
- vyšší špičkové napětí  
- → tkáň se **zahřívá → koagulace bílkovin**

##### Charakteristika
- zástava krvácení
- menší řezný efekt
- vznik „spálené“ tkáně
- uzavření cév

##### 📊 Hodnoty
- napětí: až **několik kV (např. až ~9000 V)**  
- proud: **stovky mA – jednotky A**  

---

#### 3) Smíšený režim (BLEND)
- kombinace **CUT + COAG**
- signál obsahuje jak kontinuální, tak pulzní složku 

##### Charakteristika
- současně řeže i koaguluje
- kompromis:
  - menší krvácení než CUT
  - lepší řez než COAG

---

### 🧠 Signálové rozdíly (DŮLEŽITÉ!)

- **CUT**
  - kontinuální sinus
  - bez přerušení

- **COAG**
  - krátké impulzy + pauzy
  - vysoké špičky (crest faktor ↑)

- **BLEND**
  - kombinace obou průběhů

  - přesně viditelné na osciloskopu 

---

### 📊 Výkony a proudy (z měření)

##### Výkon (přibližně)
- CUT: až **~39 W**
- BLEND: až **~25 W**
- COAG: až **~17 W**  

👉 CUT má nejvyšší výkon → proto řeže

---

#### ⚡ Další rozdělení

##### 🔹 Monopolární režim
- proud: **aktivní elektroda → pacient → návratová elektroda**
- větší rozsah účinku
- nutná kontrola kontaktu elektrody

###### 🔹 Bipolární režim
- proud mezi dvěma hroty
- přesnější, bezpečnější
- menší riziko popálení

---

#### 🧠 Důležitý pojem

##### Crest faktor
- poměr: **V_peak / V_RMS** 
- určuje „špičatost“ signálu  
- COAG má vyšší crest faktor → větší špičky

---

### ⚠️ Shrnutí na test
- **CUT → kontinuální sinus → řeže (vaporizace buněk)**
- **COAG → pulzní → koaguluje (zástava krvácení)**
- **BLEND → kombinace**
- COAG má **vyšší napětí (až kV)**
- CUT má **vyšší výkon → řez**

---

### ⚠️ Bezpečnost
- kontrola přechodového odporu elektrody
- špatný kontakt → riziko popálení


---

## 5) Laser

### ⚡ Princip
- LASER = **zesílení záření stimulovanou emisí**
- zdroj **koherentního, monochromatického světla**

### 📊 Vlastnosti
- vysoká energie
- malá rozbíhavost
- velká pronikavost
- účinnost (polovodičové): až **~50 %**

### 🧠 Důležité pojmy
- **Koherence**
  - všechny vlny mají stejnou fázi

- **Monochromatičnost**
  - jedno vlnové délky (barva)

- **Kolimace**
  - paprsek se téměř nerozbíhá

### 💉 Využití
- chirurgie (řezání, koagulace)
- oftalmologie (sítnice, čočka)
- dermatologie
- rehabilitace (ohřev tkání)

### ⚠️ Rizika
- poškození sítnice
- nutnost ochranných brýlí

---

# 🧠 RYCHLÉ SHRNUTÍ NA TEST
- defibrilátor → **energie (J), bifázický vs. monofázický**
- kardiostimulátor → **frekvence, mA, ms**
- elektrokoagulace → **teplota + typy**
- laser → **koherence + využití**