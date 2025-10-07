// denna funktion tar emot en array av strängar. gör så att den returnerar en enda sträng som sammanfogar alla strängar i arrayen

export function combineStrings(strings) {
  let result = "";
  strings.forEach((string) => {
    result = result + string + " ";
  });

  return result;
}

const data = [
  "Grodor är söta!",
  "Grodor är små!",
  "Grodor kan vara gröna!"
]

