const page = (text, link) => ({ text, link })
const section = (text, items, collapsed = true) => ({
  text,
  collapsed,
  items
})

export const sidebar = [


  section("Programovani / IT", [

// Arduino    
      section("Arduino", [
            
          section("Communication", [
              page("I2C", "/Arduino/Communication/I2C"),
              page("SPI", "/Arduino/Communication/SPI"),
              page("Serial", "/Arduino/Communication/Serial")
            ]),

          section("Display", [
            page("SH1106", "/Arduino/Display/SH1106"),
            page("OLED", "/Arduino/Display/OLED_U8g2"),
          ]),
          
          section("Libraries", [
            page("Wire", "/Arduino/Libraries/Wire"),
            page("U8g2lib", "/Arduino/Libraries/U8g2lib"),
          ]),
            
            section("Pins", [
            page("Analog", "/Arduino/Pins/Analog"),
            page("Digital", "/Arduino/Pins/Digital"),
            page("PWM", "/Arduino/Pins/PWM")
          ]),   
            
          section("Sensors", [
            page("BMP280", "/Arduino/Sensors/BMP280"),
            page("DHT22", "/Arduino/Sensors/DHT22"),
            page("DS18B20", "/Arduino/Sensors/DS18B20"),
            page("MAX30102", "/Arduino/Sensors/MAX30102"),
          ]),
      ]),




// Cpp
        section("Cpp", [
          section("Libraries", [
            page("Wire", "/Arduino/Libraries/Wire")
          ]),
          section("Communication", [
            page("I2C", "/Arduino/Communication/I2C"),
            page("SPI", "/Arduino/Communication/SPI"),
            page("Serial", "/Arduino/Communication/Serial")
          
          ])
        ]),



// VScode
        section("VScode", [
          section("/", [
            page("VitePress", "/VScode/VitePress_dokumentace"),
            page("Rychlotvorba slozek(funkce)", "/VScode/zjednodusene-pridani-slozky")
          ]),
          section("//", [
          
          ]),
        ]),


// LaTeX
        section("LaTeX", [
          page("Rychlý přehled", "/LaTeX/Rychly prehled"),


          section("Matematika", [
            page("Rozcestnik", "/LaTeX/Matematika/Rozcestnik"),
          ]),

          section("Obrázky", [
            page("Rozcestnik", "/LaTeX/Obrazky/Rozcestnik"),
          ]),

          section("Preambule", [
            page("Rozcestnik", "/LaTeX/Preambule/Rozcestnik"),
          ]),

          section("Reference a okdazy", [
            page("Rozcestnik", "/LaTeX/References/Rozcestnik"),
          ]),

          section("Tabulky", [
            page("Rozcestnik", "/LaTeX/Tables/Rozcestnik"),
          ]),

          section("Titulní strana", [
            page("Rozcestnik", "/LaTeX/Title_page/Rozcestnik"),
          ]),


          ]),
        ]),



// Linux
        section("Linux", [
          section("Prikazy", [


            section("Sprava", [
            page("Timeshift", "/Linux/Prikazy/System/Timeshift"),
          ]),

            section("Slozky a soubory", [
            page("Prace se zlozkami/soubory(zaklad)", "/Linux/Prikazy/Slozky a Soubory/Prace se slozkami(zaklad)"),
          ]),

          ]),


          section("System", [
            page("Mint Live USB", "/Linux/Prikazy/System/Mint Live USB"),
            page("Oprava bootu","Linux/Opravy/Oprava bootu"),

          
          ]),
        ]),
      

// Markdown
        section("Markdown", [
          section("/", [
            page("Styl textu", "/Markdown/Text"),
            page("Obrázky", "/Markdown/Obrazek"),
          ]),
        ]),



//Git
        section("Git", [
          section("/", [
            page("Instalace Gitu", "/Git/Instalace-Gitu"),
            page("Synchronizace", "/Git/Synchronizace"),
            page("Přáce se složkami", "/Git/Uprava slozek"),

          ]),
        ]),

        

//IT
        section("IT", [
          section("Rychnovek", [
            page("Nastaveni routeru", "/IT/Rychnovek/Nastaveni routeru"),
            page("Commands", "/Git/Commands"),

          ]),
        ]),


  




  section("Osobnni", [
    
    section("//", [
      

      section("///", [
        page("Kucharka", "/Ostatni/Kucharka"),
        page("VitePress","/Ostatni/VitePress_dokumentace"),

      ]),
    ]),
  ]),



// Auta
  section("Auta", [
    
      section("Fabia 3", [
        page("Dokumentace", "/Ostatni/Auta/Fabia3"),
        

      ]),

      section("Octavia 1", [
        page("Dokumentace", "/Ostatni/Auta/Octavia"),

      ]),
    ]),




// Skola
  section("Skola", [
    
      section("LPT", [
        page("Skripta", "/Skola/LPT_2/Skripta"),
        page("1. test", "/Skola/LPT_2/Test_1"),
        

      ]),

    ]),








]