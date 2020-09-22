const calc = () => {
    return 4 * 3;
}

let aNumber = calc();

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);

//console.log(aNumber);


