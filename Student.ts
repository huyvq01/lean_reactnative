class Student {
    name: string;
    age: number;
    major: string;

    constructor(name: string, age: number, major: string) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
}

// Tạo một đối tượng sinh viên
let student1 = new Student("John", 20, "Computer Science");

// Hiển thị thông tin của sinh viên
student1.display();