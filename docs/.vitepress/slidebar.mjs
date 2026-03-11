const page = (text, link) => ({ text, link })
const section = (text, items, collapsed = true) => ({
  text,
  collapsed,
  items
})

export const sidebar = [
  section("Arduino", [
    section("Libraries", [
      page("Wire", "/Arduino/Libraries/Wire")
    ]),
    section("Communication", [
      page("I2C", "/Arduino/Communication/I2C"),
      page("SPI", "/Arduino/Communication/SPI"),
      page("Serial", "/Arduino/Communication/Serial")
    ]),
    section("Pins", [
      page("Analog", "/Arduino/Pins/Analog"),
      page("Digital", "/Arduino/Pins/Digital"),
      page("PWM", "/Arduino/Pins/PWM")
    ])
    ]),

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
]