export default function materialSymbols() {
  /**
   * Default options
   * https://mojocss.com/docs/config/capsules#options
   */
  let defaultOptions = {
    type: ["Outlined"],
    fill: true,
    weight: 400,
    grade: 0,
    size: 24,
  };

  // Override default options if provided
  let options = { ...defaultOptions, ...this.options };

  if(!Array.isArray(options.type)){
    options.type = ["Outlined"];
  }

  let fill = "0..1";
  if(options.fill === false)
    fill = "0";
  if(options.fill === true)
    fill = "1";
  options.fill = fill;

  if(options.weight < 100)
    options.weight = 100;
  if(options.weight > 700)
    options.weight = 700;

  if(options.grade < -25)
    options.grade = -25;
  if(options.grade > 200)
    options.grade = 200;

  if(options.size < 20)
    options.size = 20;
  if(options.size > 48)
    options.size = 48;

  /**
   * Set material fonts.
   * For configuring text designs, visit: https://mojocss.com/docs/config/capsules#setconfigobject
   */
  const selectors = [];
  for (let type of options.type) {
    type = type.trim();
    selectors.push(`family=Material+Symbols+${type}:opsz,wght,FILL,GRAD@${options.size},${options.weight},${options.fill},${options.grade}`)
  }

  this.setConfig( {
    base: {
      fonts: {
        material: {
          symbols: "https://fonts.googleapis.com/css2?" + selectors.join("&")
        },
      },
    },
  });

  if(options.fill === "0..1")
    this.addPatterns({
      ".symbols-filled": `font-variation-settings: 'FILL' 1;`,
    });

}
