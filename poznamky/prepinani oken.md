# Přepínání oken pouze na jednom monitoru (AutoHotkey v2 + Logitech G915)

## 🧠 Cíl

Přepínat okna **jen na levém monitoru** pomocí klávesy **G5** na klávesnici Logitech G915.

---

## ⚙️ Použité nástroje

- AutoHotkey v2
    
- Logitech G Hub
    

---

## 🎮 Nastavení klávesy (G915)

1. Otevři **Logitech G Hub**
    
2. Vyber klávesnici G915
    
3. Jdi do:
    
    - `Assignments → Keys`
        
4. Přetáhni klávesu:
    
    - **F9 → na G5**
        

👉 Výsledek:

- G5 = F9
    

---

## 🧾 AutoHotkey skript (v2)

Vytvoř soubor např. `okna.ahk` a vlož:

```ahk
#Requires AutoHotkey v2.0

F9::{
    windows := []

    for hwnd in WinGetList()
    {
        title := WinGetTitle("ahk_id " hwnd)
        if (title = "")
            continue

        style := WinGetStyle("ahk_id " hwnd)
        if !(style & 0x10000000)
            continue

        try WinGetPos(&x, &y, &w, &h, "ahk_id " hwnd)
        catch
            continue

        centerX := x + w / 2

        ; LEVÝ monitor = záporné hodnoty
        if (centerX < 0)
            windows.Push(hwnd)
    }

    if (windows.Length = 0)
        return

    static index := 0
    index++

    if (index > windows.Length)
        index := 1

    WinActivate("ahk_id " windows[index])
}
```

---

## ▶️ Spuštění

1. Ulož `.ahk` soubor
    
2. Spusť dvojklikem
    
3. Zkontroluj ikonku **H** vpravo dole (AutoHotkey běží)
    

---

## ✅ Výsledek

- G5 přepíná okna
    
- funguje jako Alt+Tab
    
- ale **jen pro levý monitor**
    
- ignoruje druhý monitor
    

---

## ⚠️ Důležité

### Rozložení monitorů

- Levý monitor má záporné souřadnice (`centerX < 0`)
    
- Pravý monitor má kladné (`centerX >= 0`)
    

👉 Pokud změníš rozložení → uprav podmínku

---

## 🔍 Diagnostika monitorů (DŮLEŽITÉ)

Použij pro zjištění, kde se nachází tvoje okna:

```ahk
#Requires AutoHotkey v2.0

F10::{
    text := ""

    for hwnd in WinGetList()
    {
        title := WinGetTitle("ahk_id " hwnd)
        if (title = "")
            continue

        try WinGetPos(&x, &y, &w, &h, "ahk_id " hwnd)
        catch
            continue

        centerX := x + w / 2

        text .= title "`n"
        text .= "X: " x " | centerX: " centerX " | W: " w "`n`n"
    }

    MsgBox text
}
```

### Jak to použít:

1. Spusť skript
    
2. Zmáčkni **F10**
    
3. Najdi svoje okno v seznamu
    

### Interpretace:

- `centerX < 0` → levý monitor
    
- `centerX >= 0` → pravý monitor
    

---

## 🔧 Možné úpravy

### Pravý monitor:

```ahk
if (centerX >= 0)
```

---

### Opačný směr (zpět):

- přidat klávesu (např. F8 nebo F10)
    
- změnit:
    

```ahk
index--
```

---

## 📌 Shrnutí

- G5 → F9
    
- F9 → přepínání oken
    
- levý monitor = `centerX < 0`
    
- diagnostika = F10
    

---

## 🚀 Hotovo

Stabilní řešení pro multi-monitor workflow.