import process from "node:process";
// import readline from "node:readline";

// const rl = readline.createInterface({input, output});

if (process.argv.length > 1) {
    console.log("Usage: jslox [script]");
}
else if (process.argv == 1) {
    runScript(process.argv[0]);
}
else {
    runPrompt();
}