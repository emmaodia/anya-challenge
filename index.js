const main = function randomNumber(_a, _b) {

    let [a, b] = [_a, _b]
    console.log(a, b)
    if(a < b) {
        [a, b] = [a, b]
    } else {
        [a, b] = [b, a]
    }
    console.log(a, b)
    
    const result = Math.floor(Math.random() * (b - a + 1)) + a;

    console.log(result)

    return result

}

main(1, 100);

module.exports = main;
