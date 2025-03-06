// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class (Person) constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Student Class
class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

// Teacher Class
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Expose classes globally for Cypress
window.Person = Person;
window.Employee = Employee;
window.Student = Student;
window.Teacher = Teacher;
