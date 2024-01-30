function reverseInPlace(array) {
    let newArray = array.reverse();
    let final = "";
    for (let i = 0; i <= newArray.length - 1; i++) {
        final += newArray[i] + " ";
    }
    console.log(final);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);
