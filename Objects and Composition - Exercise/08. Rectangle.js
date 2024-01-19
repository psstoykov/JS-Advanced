function rectangle(width, height, color) {

    let result = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            let area = this.width * this.height;
            return area;
        }
    }
    return result
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());