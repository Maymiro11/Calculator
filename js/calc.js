const OPERATION = {
    sum: '+',
    substruction: '-',
    multiplication: '*',
    division: '/',
};

function calculate ({a, b, operation}) {
let result = null;

switch (operation) {
        case OPERATION.sum:
            result = sum(a, b);
        
        break;

        case OPERATION.substruction:
            result = substruction(a, b);

        break;

        case OPERATION.multiplication:
            result = multiplication(a, b);
        
        break;

        case OPERATION.division:
            result = division(a, b);
        
        break;

    default:
        break;
}

return result;
}