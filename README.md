# University Course Management System

## Web Programming - Fall 2026

This project was developed for Assignment 3 of the Web Programming course.

The purpose of this project is to build a University Course Management System using JavaScript and demonstrate asynchronous callbacks, ES6 classes, object property descriptors, array manipulation, and higher-order functions.

## File Organization

### models.js

This file contains the `Student` ES6 class.

The `Student` class includes:

- `id`
- `name`
- `courses`
- `addCourse()` method
- `getAverage()` method

The student ID is made immutable using `Object.defineProperty()` with `writable: false` and `configurable: false`.

### database.js

This file simulates an asynchronous database.

The `fetchStudents()` function uses `setTimeout()` to simulate a 2-second delay and then sends the student data to a callback function.

### analytics.js

This file contains the analytical functions:

- `calculateClassAverage()`
- `findTopStudent()`
- `filterStudents()`

The project uses array methods such as `map()`, `filter()`, `forEach()`, and `reduce()`.

### main.js

This is the main entry point of the application.

It:

1. Fetches student data asynchronously.
2. Converts raw data into `Student` objects.
3. Tests the immutability of student IDs.
4. Calculates the average grade for Course 101.
5. Finds the student with the highest overall average.
6. Finds all students who have taken Course 102.

## Challenges Faced

One of the main challenges was understanding how `Object.defineProperty()` can be used to make a property immutable.

Another challenge was working with asynchronous callbacks and the 2-second simulated database delay.

Using `reduce()` to compare students based on their overall averages and implementing `filterStudents()` as a higher-order function were also important parts of the assignment.

## Expected Output

```text
Fetching students from the database...
Student data received.

Testing ID immutability...
Original ID: 1
ID cannot be modified because it is read-only.
ID after attempting to change it: 1

Average grade for Course 101: 73.33
Top student: Ali
Students who took Course 102: [ 'Ali', 'Zeynep', 'Ahmet' ]