function solve(month, year) {

    let event = new Date();
    event.setFullYear(year);
    event.setMonth(month)
    event.setDate(0);

    console.log(event.getDate())
};

solve(1, 2012);

solve(2, 2021);