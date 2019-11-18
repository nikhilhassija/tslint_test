var someVar = "Global var";

const someFunc = () => {
    var someVar = "Local var";

    console.log(someVar);
};

someFunc();
