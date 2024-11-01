// List of students in the school
const students = [
    {   
        studentID: 1,
        name: "Mickey Mouse",
        subjects: ['Math', 'Geography', 'English']
    },
    {
        studentID: 2,
        name: "Minnie Mouse",
        subjects: ['Math', 'Geography', 'English']
    },
    {
        studentID: 3,
        name: "Goofy",
        subjects: ['Math', 'Chemistry', 'Physics']
    },
    {
        studentID: 4,
        name: "Donald Duck",
        subjects: ['Math', 'Chemistry', 'Physics']
    }
];

// List of lecturers teaching in the school
const lecturers = [
    { stuffID: 9, name: 'Pluto', subjectsTaught: 'Math' },
    { stuffID: 10, name: 'Ludwig Von Drake', subjectsTaught: 'Geography' },
    { stuffID: 11, name: 'Daisy Duck', subjectsTaught: 'English' },
    { stuffID: 12, name: 'Scrooge McDuck', subjectsTaught: 'Chemistry' },
    { stuffID: 13, name: 'Dewey', subjectsTaught: 'Physics' }
];

// List of subjects and registered students
const subjectClass = [
    { 
        subjectID: "A", 
        subName: 'Math', 
        registeredStudents: [],
        registerLecturer:""
    },
    { 
        subjectID: "B", 
        subName: 'Geography', 
        registeredStudents: [],
        registerLecturer:""
    },
    { 
        subjectID: "C", 
        subName: 'English', 
        registeredStudents: [],
        registerLecturer:""
    },
    { 
        subjectID: "D", 
        subName: 'Chemistry', 
        registeredStudents: [],
        registerLecturer:""
    },
    { 
        subjectID: "E", 
        subName: 'Physics', 
        registeredStudents: [],
        registerLecturer:""

     }
];


//THE FUNCTIONS
module.exports = {
    addStudent(newStudents){
        const existingStudent = students.find(s => s.studentID === newStudents.studentID);
        if (!existingStudent) {
            // If the student does not exist, add the new student to the array
            students.push(newStudents);
            console.log(`Student ${newStudents.name} has been successfully added.`);
        } else {
            console.log(`Student with ID ${newStudents.studentID} already exists.`);
        }

        students.forEach(students => {
            console.log(`Registered Students: ${students.name}`);
        });

    },
    registerAllStudents() {
        students.forEach(student => {
            student.subjects.forEach(subject => {
                // Find the corresponding subject class
                const subjectClassEntry = subjectClass.find(s => s.subName === subject);
    
                if (subjectClassEntry) {
                    if (!subjectClassEntry.registeredStudents.includes(student.name)) {
                        subjectClassEntry.registeredStudents.push(student.name); 
                    }
                }
            });
        });
    
        // Output the result for verification
        subjectClass.forEach(subject => {
            console.log(`Subject: ${subject.subName}`);
            console.log(`Registered Students: ${subject.registeredStudents.join(", ")}`);
        });
    
}

    // Check if the student is already registered for this sub
};
