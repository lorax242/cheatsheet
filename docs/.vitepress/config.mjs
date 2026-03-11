export default {
  title: "Programming Cheatsheet",
  description: "Arduino a Cpp tahák",

  themeConfig: {
    sidebar: [
      {
        text: "Arduino",
        items: [
          { text: "Wire", link: "/Arduino/Libraries/Wire" },
          { text: "I2C", link: "/Arduino/Communication/I2C" },
          { text: "SPI", link: "/Arduino/Communication/SPI" },
          { text: "Serial", link: "/Arduino/Communication/Serial" }
        ]
      },
      {
        text: "Other",
        items: [
          { text: "Git", link: "/Git" },
          { text: "Cpp", link: "/Cpp" }
        ]
      }
    ]
  }
}