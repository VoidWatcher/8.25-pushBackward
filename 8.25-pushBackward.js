function pushBackward (arr,elem) {
    let i = 0;
    arr = arr.filter(value => {
        if (value == elem) {
            i++;
            return false;
        } else {
            return true;
        }
    });
    while (i) {
        arr.push(elem);
        i--;
    }
    return arr;
}

console.log(pushBackward([0, 1, 0, 3, 12], 0));