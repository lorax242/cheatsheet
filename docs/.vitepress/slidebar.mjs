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
            page("LCD", "/Arduino/Display/LCD_I2C"),
            page("OLED", "/Arduino/Display/OLED_U8g2"),
          ]),
          
          section("Libraries", [
            page("Wire", "/Arduino/Libraries/Wire")
          ]),
            
            section("Pins", [
            page("Analog", "/Arduino/Pins/Analog"),
            page("Digital", "/Arduino/Pins/Digital"),
            page("PWM", "/Arduino/Pins/PWM")
          ]),   
            
          section("Sensors", [
            page("BMP280", "/Arduino/Sensors/BMP280"),
            page("DHT22", "/Arduino/Sensors/DHT22"),
            page("DS18B20", "/Arduino/Sensors/DS18B20")
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
            page("VitePress", "/VScode/tvorba_teto_dokumentace"),
            page("Rychlotvorba slozek(funkce)", "/VScode/zjednoduseni_prace_s_kodem")
          ]),
          section("//", [
          
          ]),
        ]),


//Git
        section("Git", [
          section("/", [
            //page("Rychlotvorba slozek(funkce)", "/VScode/zjednoduseni_prace_s_kodem")
          ]),
          section("//", [
          
          ]),
        ]),

        
  ]),
  




  section("Osobnni", [
    
    section("//", [
      

      section("///", [
        page("kucharka", "/Ostatni/pdf"),
        page("VitePress","/Ostatni/VitePress_dokumentace")

      ]),
    ]),
  ]),


  section("Skola", [
    
    section("//", [

      section("///", [

      ]),
    ]),
  ]),












]