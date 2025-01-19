function listOfColours(colours) {
  const select = document.getElementById("colourSelect");
  const p = document.getElementById("selectedColourText");

  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour.rgb;
    option.textContent = colour.name;
    select.appendChild(option);
  });

  select.addEventListener("change", (event) => {
    const selectedColour = event.target.value;
    const colourInfo = colours.find((colour) => colour.rgb === selectedColour);
    p.textContent = `You have selected: ${colourInfo.name}`;
    p.style.color = colourInfo.rgb;
  });
}

// const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

const colours = [
  { name: "Red", rgb: "rgb(255, 0, 13)" },
  { name: "Blue", rgb: "rgb(0, 127, 255)" },
  { name: "Green", rgb: "rgb(0, 204, 51)" },
  { name: "Yellow", rgb: "rgb(255, 237, 134)" },
  { name: "Pink", rgb: "rgb(244, 51, 255)" },
  { name: "Brown", rgb: "rgb(104, 74, 47)" },
];

// I just wanted select some colors by my own, I use this : https://colors.artyclick.com/color-shades-finder/?color=#835C3B

listOfColours(colours);
