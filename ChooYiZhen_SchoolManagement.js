
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
        const existingStudent = students.find(s => s.studentID === newStudents.studentID);      // THE VARIBALE EXISTING STUDENT WILL ONLY EXIST IF THE STUDENT'S ID ALREADY EXIST.
        if (!existingStudent) { // IF THE STUDENT EXIST 
            students.push(newStudents); // THEN, PUSH THE STUDENT JSON OBJECT
            console.log(`Student ${newStudents.name} has been successfully added.`);    // OUTPUT MESSAGE 
        } else {
            console.log(`Student with ID ${newStudents.studentID} already exists.`);    // ELSE STUDENT ID ALREADY EXIST
        }

        students.forEach(students => {
            console.log(`Registered Students: ${students.name}`);   // DISPLAY ALL THE STUDENT IN THE SCHOOL
        });

    },
    goBackKamgpongStudent(studnet){       
        const studentIDEntry =students.find(s => s.studentID===studnet.studentID);  
        //THE VARIABLE STUDENTIDENTRY WILL CONSTAIN THE JSON OBJECT OF THE STUDENTS'S ARRAY. AND IT WILL COMPARE AND FIND
        // THE JSON OBJECT KEY THAT CONTAINS THE SAME STUDENT ID
        if(studentIDEntry){ // IF STUDENT ENTRY IS NOT NULL
            const updateStudentList= students.filter(s => s.studentID!==studnet.studentID); // FILTER IS REMOVING VIA THE STRING CONTENT
            students.length=0;  // RESET STUDENTS LIST 
            //REPLACE THE NEW STUDENT LIST INTO THE OLD CLEARED ONES
            students.push(...updateStudentList);    //SPREAD OPERATOR USED TO PUSH EACH OBJECT INTO THE ARRAY IF NOT IT WILL RETURN UNDEFINED.
            console.log(`Student with student ID ${studnet.studentID} has been expelled.`);
            console.log('--------------------------------------------------------------')
            students.forEach(student => {
                console.log(`Student: ${student.name}, ID: ${student.studentID}`);      // THIS FOR EACH LOOP WILL OUTPUT ALL THE STUDENT LIST REMAINING 
            });    
        }
        else{
            console.log(`student with ${studnet.studentID} cannot be found.`)   // IF STUDENT ID IS NOT FOUND 
        }
        
    },
    registerLecturer(){
        lecturers.forEach(lecturer =>{
            const lecturerEntry = subjectClass.find(s => s.subName === lecturer.subjectsTaught);    
            // FIND LECTURER'S SUBJECTSTAUGHT MATCHES ANY LECTURER IN THE SUBJECTCALSS'S SUBJECT NAME
            if(!lecturerEntry.registerLecturer.includes(lecturer.name)){    // IF FOUND
                lecturerEntry.registerLecturer =lecturer.name; // ADD LECTURER'S NAME INTO THE SUBJECT CLASS
                console.log(`Assign Lecturer: ${lecturer.name} to class the ${lecturerEntry.subName} class.`);  // OUTPUT MESSAGE
            }
            
        })
    },
    stirfrySotongLecturer(lecturer){
        const LecturerEntry = lecturers.find(s =>s.stuffID=== lecturer.stuffID);    //FIND LECTURER BASED ON STUFF ID
        if (LecturerEntry){ //IF FOUND
            const updateLecturerList = lecturer.filter(s => s.stuffID === lecturer.stuffID);    // REMOVE BY FILTERING
            console.log(`Remove Lecturer: ${lecturer.name}.`)   // MESSAGE
        }
        else{
            console.log(`Lecturer not found.`)
        }
    },
    registerAllStudents() {
        students.forEach(student => {   // LOOP THE STUDENT ARRAY
            student.subjects.forEach(subject => {// for each sutdent loop the subjects
                const subjectClassEntry = subjectClass.find(s => s.subName === subject); //     
    
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
