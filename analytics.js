export function calculateClassAverage(students, courseId) {
    const grades = [];

    students.forEach(student => {
        student.courses.forEach(course => {
            if (course.courseId === courseId) {
                grades.push(course.grade);
            }
        });
    });

    if (grades.length === 0) {
        return 0;
    }

    const total = grades.reduce((sum, grade) => sum + grade, 0);

    return total / grades.length;
}


export function findTopStudent(students) {
    return students.reduce((topStudent, currentStudent) => {
        if (currentStudent.getAverage() > topStudent.getAverage()) {
            return currentStudent;
        }

        return topStudent;
    });
}


export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}