# I2C

## Related

- [Wire library](../Libraries/Wire.md)
- [SPI communication](SPI.md)


## Popis

I2C (Inter-Integrated Circuit) je sériový komunikační protokol používaný pro komunikaci mezi mikrokontrolerem a periferními zařízeními.

Používá pouze **2 vodiče**:

- SDA – Serial Data (data)
- SCL – Serial Clock (hodiny)

Každé zařízení na sběrnici má **unikátní adresu**.

Používá se například pro:

- senzory
- OLED displeje
- RTC moduly
- komunikaci mezi mikrokontrolery

---

## Používané knihovny

- [Wire](../Libraries/Wire.md)

---

## Syntaxe

```cpp
#include <Wire.h>

void setup() {
    Wire.begin();
}
```

---

## Důležité funkce

### Inicializace

- `Wire.begin()`  
zahájí I2C komunikaci

---

### Odesílání dat

- `Wire.beginTransmission(address)`  
zahájí komunikaci se zařízením

- `Wire.write(data)`  
odešle data

- `Wire.endTransmission()`  
ukončí přenos

---

### Čtení dat

- `Wire.requestFrom(address, bytes)`  
požádá zařízení o data

- `Wire.read()`  
přečte přijatá data

- `Wire.available()`  
zjistí kolik bajtů je dostupných

---

## Příklady

### Základní inicializace

```cpp
#include <Wire.h>

void setup() {
    Wire.begin();
}

void loop() {

}
```

---

### Odeslání dat zařízení

```cpp
Wire.beginTransmission(0x3C);
Wire.write(0x00);
Wire.endTransmission();
```

---

### Čtení dat

```cpp
Wire.requestFrom(0x3C, 1);

while (Wire.available()) {
    int data = Wire.read();
}
```

---

## Typické použití

- OLED displeje
- BMP280 / BME280 senzory
- RTC moduly (DS3231)
- EEPROM paměti
- ADC převodníky

---

## Poznámky

- všechna zařízení sdílí stejné vodiče **SDA a SCL**
- každé zařízení musí mít **unikátní adresu**
- většinou je potřeba **pull-up rezistor na SDA a SCL**

Typické adresy zařízení:

- `0x3C` – OLED displej
- `0x68` – RTC modul
- `0x76 / 0x77` – BMP280

---

## Odkazy / dokumentace

Arduino dokumentace:

https://www.arduino.cc/reference/en/language/functions/communication/wire/