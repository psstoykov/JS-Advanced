function solve() {

    let outofstock = []
    let inventory = [

        { 'car': 5 },
        { 'horse': 3 },
        { 'hat': 10 },
        { 'pen': 6 }
    ]


    const index = inventory.findIndex((el) => el.hasOwnProperty('pen'))

    let a = '55';
    let b = '66'
    console.log(a += b)
}

solve()