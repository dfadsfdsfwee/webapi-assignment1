const schoolModule = require('./ChooYiZhen_SchoolManagement');
// SchoolModule.registerLecturer();
// const newStudent = {
//     studentID: 5,
//     name: "Daisy Duck",
//     subjects: ['Math', 'Biology']
// };

// // Add the new student
// SchoolModule.addStudent(newStudent);


// console.log(newStudent);


// Sample student data to test adding a new student
const newStudent = {
    studentID: 5,
    name: "Clarabelle Cow",
    subjects: ['Math', 'History', 'English']
};

// Test the addStudent function
console.log("\n--- Testing addStudent Function ---");
schoolModule.addStudent(newStudent);

// Test the changeSubjectNameForAllStudents function
console.log("\n--- Testing changeSubjectNameForAllStudents Function ---");
schoolModule.subjectNameChange('Math', 'Advanced Math');

// Test the goBackKamgpongStudent function
console.log("\n--- Testing goBackKamgpongStudent Function ---");
const studentToRemove = { studentID: 3 }; // Replace with an ID that exists
schoolModule.goBackKamgpongStudent(studentToRemove);

