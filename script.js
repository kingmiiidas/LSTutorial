class Student {
    constructor({ fName, lName, major}) {
        this.fName = fName
        this.lName = lName
        this.major = major
    }

    toHTML() {
        console.log("toHTML function called");
            return `
            <li>
                <span>First Name: ${this.fName}</span><br><br>
                <span>Last Name:${this.lName}</span><br><br>
                <span>Major: ${this.major}</span><br><br>
            </li>
            `
    }
}

let students = [];

//This will be our "trigger" to create a new student and add them to the array
document.getElementById("studentForm").addEventListener("submit", createStudent);

//This will be the function to create the student and we will pass in the "event"
function createStudent(event){
    console.log("student created"); //We will use this to ensure the correct function is called
    event.preventDefault(); //This prevents empty submissions
    let formData = new FormData(event.currentTarget); //Pulls DOM data
    let student = new Student(Object.fromEntries(formData)); //creates a new object
    students.push(student); //pushes our new student to array of students
    localStorage.setItem("students", JSON.stringify(students)); //adds student to local storage

    const studentList = document.getElementById("studentList");
    studentList.innerHTML = ""; // Clear the list before re-rendering
    students.forEach((student) => {
        studentList.innerHTML += student.toHTML(); // Append each student's HTML to the list
    });
}

