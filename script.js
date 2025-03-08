// Person Class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age
  get age() {
    return this._age;
  }
}

// Student Class (inherits from Person)
class Student extends Person {
  study() {
    // Direct console log for "study" action
    console.log(`${this.name} is studying.`);
  }
}

// Teacher Class (inherits from Person)
class Teacher extends Person {
  teach() {
    // Direct console log for "teach" action
    console.log(`${this.name} is teaching.`);
  }
}

// Expose classes globally for Cypress
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
