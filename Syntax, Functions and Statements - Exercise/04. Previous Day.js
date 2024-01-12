function solve(year, month, day) {

    let event = new Date();

    event.setFullYear(year);
    event.setMonth(month - 1);
    event.setDate(day - 1);
    let realMonth = event.getMonth() + 1;
    console.log(`${event.getFullYear()}-${realMonth}-${event.getDate()}`)
};

solve(2016, 9, 30);

solve(2016, 1, 1);

solve(2015, 5, 10);