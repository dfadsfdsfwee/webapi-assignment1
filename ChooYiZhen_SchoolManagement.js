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
    { stuffID: 9, 
        name: 'Pluto', 
        subjectsTaught: 'Math' 
    },
    { stuffID: 10, 
        name: 'Ludwig Von Drake', 
        subjectsTaught: 'Geography' 
    },
    { stuffID: 11, 
        name: 'Daisy Duck', 
        subjectsTaught: 'English' 
    },
    { stuffID: 12, 
        name: 'Scrooge McDuck', 
        subjectsTaught: 'Chemistry' 
    },
    { stuffID: 13, 
        name: 'Dewey Duck', 
        subjectsTaught: 'Physics' 
    }
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
            students.push(newStudents);
            console.log(`Student ${newStudents.name} has been successfully added.`);
        } else {
            console.log(`Student with ID ${newStudents.studentID} already exists.`);
        }

        students.forEach(students => {
            console.log(`Registered Students: ${students.name}`);
        });

    },
    goBackKamgpongStudent(studnet){       
        const studentIDEntry =students.find(s => s.studentID===studnet.studentID);  //
        if(studentIDEntry){
            const updateStudentList= students.filter(s => s.studentID!==studnet.studentID);
            // RESET STUDENTS LIST 
            students.length=0;
            //REPLACE THE NEW STUDENT LIST INTO THE OLD CLEARED ONES
            students.push(...updateStudentList);    //SPREAD OPERATOR USED TO PUSH EACH OBJECT INTO THE ARRAY IF NOT IT WILL RETURN UNDEFINED.
            console.log(`Student with student ID ${studnet.studentID} has been expelled.`);
            console.log('--------------------------------------------------------------')
            students.forEach(student => {
                console.log(`Student: ${student.name}, ID: ${student.studentID}`);
            });    
        }
        else{
            console.log(`student with ${studnet.studentID} cannot be found.`)
        }
        
    },
    registerLecturer(){
        lecturers.forEach(lecturer =>{
            const lecturerEntry = subjectClass.find(s => s.subName === lecturer.subjectsTaught);
            if(!lecturerEntry.registerLecturer.includes(lecturer.name)){
                lecturerEntry.registerLecturer =lecturer.name;
                console.log(`Assign Lecturer: ${lecturer.name} to class the ${lecturerEntry.subName} class.`);
            }
            
        })
    },
    stirfrySotongLecturer(lecturer){
        const LecturerEntry = lecturers.find(s =>s.stuffID=== lecturer.stuffID);
        if (lecturerEntry){
            const updateLecturerList = lecturer.filter(s => s.stuffID === lecturer.stuffID);
        }
    },
    registerAllStudents() {
        students.forEach(student => {
            student.subjects.forEach(subject => {
                const subjectClassEntry = subjectClass.find(s => s.subName === subject);
    
                if (subjectClassEntry) {
                    if (!subjectClassEntry.registeredStudents.includes(student.name)) {
                        subjectClassEntry.registeredStudents.push(student.name); 
                    }
                }
            });
        });
    
        subjectClass.forEach(subject => {
            console.log(`Subject: ${subject.subName}`);
            console.log(`Registered Students: ${subject.registeredStudents.join(", ")}`);
        });
    
}
};