function solve(a, b) {

    let bigger = Math.max(a, b);
    let smaller = Math.min(a, b)

    let GCD = bigger % smaller;
    // console.log(GCD)
    while (GCD != 0) {
        bigger = smaller;
        smaller = GCD;
        GCD = bigger % smaller;
    }
    console.log(smaller)
};

// solve(16, 5);

solve(2154, 458);