function solve(speed, area) {

    let obj = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }
    let difference = 0;

    if (obj[area] < speed) {
        difference = Math.abs(obj[area] - speed);
        let status = "";
        if (difference <= 20) {
            status = "speeding";
        } else if (difference > 20 && difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${obj[area]} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${obj[area]} zone`)
    }

};

solve(40, 'city');

solve(21, 'residential');

solve(120, 'interstate');

solve(200, 'motorway');