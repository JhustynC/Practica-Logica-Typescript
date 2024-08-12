const createChristmasTree = (ornaments: string, height: number): string => {
  let christmasTree: string = "";
  let stringIndex: number = 0;

  for (let index = 0; index < height; index++) {
    var ornament: string = ornaments[stringIndex];
    stringIndex++;

    while (ornament.replace(/ /g, "").length < index + 1) {
      ornament += " " + ornaments[stringIndex];
      stringIndex++;
      if (stringIndex >= ornaments.length) stringIndex = 0;
    }

    christmasTree += " ".repeat(height - index - 1) + ornament + "\n";
  }

  christmasTree += " ".repeat(height - 1) + "|";
  return christmasTree;
};

console.log(createChristmasTree("123", 5));
