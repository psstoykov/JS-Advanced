function solve() {

    let string = 'aaa';
    string = string.split("")
        .map(el => el = el.charCodeAt() + 1)
        .map(el => String.fromCharCode(el));

    console.log(string)
}
solve();