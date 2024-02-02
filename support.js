function solve() {

    let c1 = {
        type: "car",
        color: "red"
    }

    let c2 = Object.create(c1)
    c2.work = "worker"

    let parent = Object.getPrototypeOf(c2)

    // for (let [key, value] of parentEntries) {
    //     console.log(key, value)
    // }
    console.log(parent)
    console.log(c2)
}

solve()