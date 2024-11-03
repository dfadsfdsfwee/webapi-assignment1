const SchoolModule = require('./ChooYiZhen_SchoolManagement');
// SchoolModule.registerLecturer();
// const newStudent = {
//     studentID: 5,
//     name: "Daisy Duck",
//     subjects: ['Math', 'Biology']
// };

// // Add the new student
// SchoolModule.addStudent(newStudent);


// console.log(newStudent);

const student =    {   
    studentID: 1,
    name: "Mickey Mouse",
    subjects: ['Math', 'Geography', 'English']
};

SchoolModule.expelStudent(student);

