# Wire.h

## Popis

`Wire.h` je knihovna pro práci s I2C komunikací v Arduino.

Umožňuje mikrokontroleru komunikovat s dalšími zařízeními přes I2C sběrnici, například:

- senzory
- displeje
- RTC moduly
- EEPROM

Komunikace probíhá pomocí dvou vodičů:

- SDA – data
- SCL – clock

Používá se pro implementaci I2C protokolu na Arduino.

---

## Používané protokoly

- I2C

Související dokumentace:

- [I2C komunikace](../Communication/I2C.md)

---

## Syntaxe

```cpp
#include <Wire.h>
```

Inicializace:

```cpp
Wire.begin();
```

---

## Důležité funkce

### Inicializace

`Wire.begin()`

zahájí I2C komunikaci

```cpp
Wire.begin();
```

---

### Zahájení komunikace se zařízením

`Wire.beginTransmission(address)`

zahájí přenos na zařízení s danou adresou

```cpp
Wire.beginTransmission(0x3C);
```

---

### Odeslání dat

`Wire.write(data)`

odešle data do zařízení

```cpp
Wire.write(0x00);
```

---

### Ukončení přenosu

`Wire.endTransmission()`

ukončí přenos dat

```cpp
Wire.endTransmission();
```

---

### Požadavek na data

`Wire.requestFrom(address, quantity)`

požádá zařízení o určitý počet bajtů

```cpp
Wire.requestFrom(0x3C, 1);
```

---

### Čtení dat

`Wire.read()`

přečte přijatý bajt

```cpp
int data = Wire.read();
```

---

### Kontrola dostupných dat

`Wire.available()`

vrátí počet dostupných bajtů

```cpp
Wire.available();
```

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

### Čtení dat ze zařízení

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
- RTC moduly
- EEPROM paměti
- ADC převodníky

---

## Poznámky

- zařízení musí mít unikátní I2C adresu
- na SDA a SCL bývají pull-up rezistory
- více zařízení může být na stejné sběrnici

---

## Odkazy / dokumentace

Arduino reference:

https://www.arduino.cc/reference/en/language/functions/communication/wire/