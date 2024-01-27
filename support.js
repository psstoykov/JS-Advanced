function solve() {

    let pattern = /\w+\@\w+\.\w+/gm

    let str = 'dddd@abv.bg'

    if (pattern.test(str)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
solve();