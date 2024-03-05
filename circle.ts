class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateCircumference(): number {
        return Math.PI * 2 * this.radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Example usage:
const radius: number = 5;
const circle = new Circle(radius);
console.log("Chu vi của hình tròn là:", circle.calculateCircumference());
console.log("Diện tích của hình tròn là:", circle.calculateArea());