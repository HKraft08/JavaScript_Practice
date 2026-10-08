let students = [
    {
        name: "Makwa",
        age: 23,
        mark: 85,
        course: "Intro to Programming"
    },

    {
        name: "Lona",
        age: 21,
        mark: 80,
        course: "Time Management"
    },

    {
        name: "Karabo",
        age: 24,
        mark: 96,
        course: "HTML"
    },

    {
        name: "Moe",
        age: 23,
        mark: 90,
        course: "CSS"
    },

    {
        name: "Ditebogo",
        age: 25,
        mark: 85,
        course: "Java"
    }
]

function displayStudents(students) {
    return "Student Details: \n" + students[0].name + ": " + students[0].mark + "\n" + students[1].name + ": "
        + students[1].mark + "\n" + students[2].name + ": " + students[2].mark + "\n" +
        students[3].name + ": " + students[3].mark + "\n" + students[4].name + ": " + students[4].mark + "\n";
}

function calculateAverage(students) {
    let total = students[0].mark + students[1].mark + students[2].mark + students[3].mark + students[4].mark;

    return "Average mark: " + total/5 + "\n";
}

function findTopStudent(students) {

}

function findPassedStudents(students) {
    let passed = [];

    if (students[0].mark >= 50) {
        passed.push(students[0].name);
    }

    if (students[1].mark >= 50) {
        passed.push(students[1].name);
    }

    if (students[2].mark >= 50) {
        passed.push(students[2].name);
    }

    if (students[3].mark >= 50) {
        passed.push(students[3].name);
    }

    if (students[4].mark >= 50) {
        passed.push(students[4].name)
    }

    return "Students who passed: \n" + passed;
}

console.log(displayStudents(students));
console.log(calculateAverage(students));
//console.log(findTopStudent(students));
console.log(findPassedStudents(students));