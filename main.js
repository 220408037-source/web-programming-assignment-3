import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
    calculateClassAverage,
    findTopStudent,
    filterStudents
} from "./analytics.js";

console.log("Fetching students from the database...");

fetchStudents((rawData) => {
    console.log("Student data received.");

    const students = rawData.map(
        student => new Student(
            student.id,
            student.name,
            student.courses
        )
    );

    console.log("\nTesting ID immutability...");

console.log("Original ID:", students[0].id);

try {
    students[0].id = 999;
} catch (error) {
    console.log("ID cannot be modified because it is read-only.");
}

console.log("ID after attempting to change it:", students[0].id);


    const course101Average = calculateClassAverage(students, 101);

    console.log(
        "\nAverage grade for Course 101:",
        course101Average.toFixed(2)
    );


    const topStudent = findTopStudent(students);

    console.log(
        "Top student:",
        topStudent.name
    );

    const course102Students = filterStudents(
        students,
        student => student.courses.some(
            course => course.courseId === 102
        )
    );

    console.log(
        "Students who took Course 102:",
        course102Students.map(student => student.name)
    );
});