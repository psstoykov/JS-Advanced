function solve(steps, length, speed) {

    let distance = (steps * length);
    let rests = Math.floor(distance / 500)
    let speedMeterPerSec = speed / 3.6;
    let timeinSeconds = Math.round(distance / speedMeterPerSec);
    timeinSeconds += rests * 60 //add the rest times

    let hours = Math.floor(timeinSeconds / 3600);
    let minutes = Math.floor(timeinSeconds / 60);
    if (minutes >= 60) {
        hours += minutes % 60;
    }
    let seconds = timeinSeconds % 60;
    if (seconds >= 60) {
        minutes += seconds % 60;
    }
    console.log(`${hours < 10 ? hours = "0" + hours : hours}:${minutes < 10 ? minutes = "0" + minutes : minutes}:${seconds < 10 ? seconds = "0" + hours : seconds}`)

};

solve(4000, 0.60, 5);

solve(2564, 0.70, 5.5);