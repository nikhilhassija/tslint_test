let tslint = require("tslint");

const lint = () => {
    let linter = tslint.Linter.createProgram("./tslint.json");
};

lint();
