
class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age;   
  }

  // Getter for name
  getName() {
    return this.name;
  }

  
  setAge(newAge) {
    this.age = newAge;
  }

  
  getAge() {
    return this.age;
  }
}

// Student Class (inherits from Person)
class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}


class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}


const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30; 
console.log(person.age);  

const student = new Student("Alice", 22);
student.study();  
const teacher = new Teacher("Bob", 40);
teacher.teach();  
