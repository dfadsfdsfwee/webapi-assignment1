
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
    goBackKamgpongStudent(student){       
        const studentIDEntry =students.find(s => s.studentID===student.studentID);  
        //THE VARIABLE STUDENTIDENTRY WILL CONSTAIN THE JSON OBJECT OF THE STUDENTS'S ARRAY. AND IT WILL COMPARE AND FIND
        // THE JSON OBJECT KEY THAT CONTAINS THE SAME STUDENT ID
        if(studentIDEntry){ // IF STUDENT ENTRY IS NOT NULL
            const updateStudentList= students.filter(s => s.studentID!==student.studentID); // FILTER IS REMOVING VIA THE STRING CONTENT
            students.length=0;  // RESET STUDENTS LIST 
            //REPLACE THE NEW STUDENT LIST INTO THE OLD CLEARED ONES
            students.push(...updateStudentList);    //SPREAD OPERATOR USED TO PUSH EACH OBJECT INTO THE ARRAY IF NOT IT WILL RETURN UNDEFINED.
            console.log(`Student with student ID ${student.studentID} has been expelled.`);
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
                const subjectClassEntry = subjectClass.find(s => s.subName === subject); //     IF THE SUBJECT IN THE STUDENT ARRAY MATCHES HTE SUBJECT CLASS'S SUBJECT THE VARIABLE WILL BE TRUE
    
                if (subjectClassEntry) {    // IF MATCH IS FOUNF
                    if (!subjectClassEntry.registeredStudents.includes(student.name)) { // CHECK IF THE NAME OF THE STUDENT ALREAY EXIST AND IF NOT
                        subjectClassEntry.registeredStudents.push(student.name); // ADD THE STUDENT NAME 
                    }
                }
            });
        });
    
        subjectClass.forEach(subject => {
            console.log(`Subject: ${subject.subName}`); // JUST OUTPUT ALL THE SUBJECT 
            console.log(`Registered Students: ${subject.registeredStudents.join(", ")}`); //STATE WHICH STUDENT IS AT WHERE
        });
    
},
subjectNameChange(oldsubjectName, newSubjectName){
    students.forEach(student =>{
        // LOOP THE STUDENT JSON OBJECT AND CHECK IF THE OLD ON IS CORRECTLY FOUND
        if(student.subjects.includes(oldsubjectName)){  // USE INCLUDE AS CONTAINS 
            student.subjects = student.subjects.map(s => s === oldsubjectName?newSubjectName:s) // IF MATCH THEN USE THE NEWSUBJECT NAME ELSE USE S WHICH CONTAINS THE OLD STRING
            /*(method) Array<string>.map<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any): U[]
                Calls a defined callback function on each element of an array, and returns an array that contains the results.
                @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
                @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. */
        }
    });
    
    lecturers.forEach(lecturers =>{
        if(lecturers.subjectsTaught === oldsubjectName?newSubjectName:oldsubjectName);  // LOOP THE ARRAY AND THEN IF THE JSON  OBJECT MATCHES THEN CHANGE ELSE : REMAIN THE
    });

    subjectClass.forEach(subject=>{
        if(subjectClass.subName === oldsubjectName?newSubjectName:oldsubjectName);
    });
}
};
