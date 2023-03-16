const isIntegerAndPositiveNumber = number => {
    let isValidNumber = Number.isInteger(number) && number > 0;
    if (!isValidNumber) return false;
    
    return true;
}

export default isIntegerAndPositiveNumber;