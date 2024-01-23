function solve() {

    let arr = ['Sofia', 'Pleven', 'Lovech', 'Varna', 'Burgas']
    let search = 'o'

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(search)) {
            console.log('boo')
        }
    }
}

solve();