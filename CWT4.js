function XO(str) {
    let lowerStr = toLowerCase();
    let a = lowerStr.split('x').length - 1; 
    let b = lowerStr.split('y').length - 1;

    if (a === b) {
        return true;
    } else {
        return false;
    }
}