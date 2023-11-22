const Utils = {
    calculateNumber(type, a, b) {
    const firstInt = Math.round(a);
    const secondInt = Math.round(b);

    if (type === 'SUBTRACT') {
        return firstInt - secondInt;
    }

    if (type === 'DIVIDE') {
        if (secondInt === 0) {
        return 'Error';
        }
        return firstInt / secondInt;
    }

    return firstInt + secondInt;
    }
};

module.exports = Utils;
