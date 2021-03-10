const prompt = require("prompt-sync")({ sigint: true });

function main() {
  wartoscDocelowa = "okoń";

  while (true) {
    let odpowiedz = prompt(`Wpisz wartość ${wartoscDocelowa}. `);

    if (odpowiedz === wartoscDocelowa) {
      console.log("Możesz wejść..");
      break;
    } else {
      console.log("Wartość niepoprawna!");
    }
  }
}

main();
