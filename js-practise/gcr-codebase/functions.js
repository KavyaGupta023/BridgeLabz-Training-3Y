
// ==========================================
// Q1. CALLBACK FUNCTION
// ==========================================

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

console.log("Q1. Callback Function");
greetUser("Kavya", showEndMessage);


// ==========================================
// Q2. HIGHER ORDER FUNCTION
// ==========================================

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

const numbers = [1, 2, 3, 4];

console.log("\nQ2. Higher Order Function");
console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));


// ==========================================
// Q3. ARROW FUNCTION VS NORMAL FUNCTION
// ==========================================

const user = {
    name: "Kavya",

    showName: () => {
        console.log("Arrow function:", this.name);
    }
};

console.log("\nQ3. Arrow Function");
user.showName();

// Fix using normal function

const user2 = {
    name: "Kavya",

    showName: function() {
        console.log("Normal function:", this.name);
    }
};

user2.showName();


// ==========================================
// Q4. CONSTRUCTOR FUNCTION AND PROTOTYPE
// ==========================================

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

console.log("\nQ4. Constructor and Prototype");

car1.getDetails();
car2.getDetails();


// ==========================================
// Q5. PERSON -> STUDENT INHERITANCE
// ==========================================

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

const student1 = new Student("Kavya", "Computer Science");

console.log("\nQ5. Person to Student Inheritance");

student1.showName();
student1.showBranch();


// ==========================================
// Q6. PERSON -> FACULTY -> PROFESSOR
// ==========================================

// Parent constructor
function Person6(name) {
    this.name = name;
}

Person6.prototype.showName = function() {
    console.log("Name:", this.name);
};

// Faculty constructor
function Faculty(name, department) {
    Person6.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person6.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log("Department:", this.department);
};

// Professor constructor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log("Subject:", this.subject);
};

const professor1 = new Professor(
    "Rahul",
    "Computer Science",
    "JavaScript"
);

console.log("\nQ6. Multilevel Inheritance");

professor1.showName();
professor1.showDepartment();
professor1.showSubject();


// ==========================================
// Q7. CLOSURE - makeMultiplier()
// ==========================================

function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const doubleNumber = makeMultiplier(2);

console.log("\nQ7. Closure");

console.log("Triple:", triple(5));
console.log("Double:", doubleNumber(5));


// ==========================================
// Q8. CUSTOM PROTOTYPE METHOD - myMap()
// ==========================================

Array.prototype.myMap = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const arr = [1, 2, 3];

console.log("\nQ8. Custom myMap Method");

console.log(arr.myMap(num => num * 2));


// ==========================================
// Q9. PERSON -> STUDENT USING ES6 CLASSES
// ==========================================

class PersonClass {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class StudentClass extends PersonClass {

    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const student2 = new StudentClass("Kavya", "Computer Science");

console.log("\nQ9. ES6 Class Inheritance");

student2.showName();
student2.showBranch();
