import process from Node;
import readline from Node;

const rl = readline.createInterface({input, output});

if (process.argv.length > 1) {
    console.log("Usage: jslox [script]");
}
else if (process.argv == 1) {
    runScript(process.argv[0]);
}
else {
    runPrompt();
}