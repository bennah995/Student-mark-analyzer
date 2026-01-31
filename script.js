const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];

//loop to go through each student
for (stdLoop = 0; stdLoop < students.length; stdLoop++){

  //getting marks and storing them in hte variable currenMark
  let currentMark = students[stdLoop].marks;

  let total = 0;
  // loop for going through each student mark and getting total mark
  for (marksLoop = 0; marksLoop < currentMark.length; marksLoop++){
    total += currentMark[marksLoop];
  }

  // in order to get the average, I have to go in thee students, then studentsloop, then marks length
  let average = total / students[stdLoop].marks.length;


  // console.log(`The total is ${total} and the average is ${average} for ${students[stdLoop].name}`);
  
  // grade assignment
  let grade;
  if (average >= 80){
    grade = "A";
  } else if(grade >= 70){
    grade = "B";    
  } else if(grade >= 60){
    grade = "C";    
  } else if(grade >= 50){
    grade = "D";    
  } else{
    grade = "E";    
  }

  // status assignment
  let status;
  if(average >= 60){
    status = "PASS";
  } else{
    status = "FAIL";
  }

  // report creation
  let report = [];
   report.push ({name: `${students[stdLoop].name}`, average: `${average}`, grade: `${grade}`, status: `${status}`});
   
  // console.log(report);

  // class report printing
  console.log(`${students[stdLoop].name}: Avg ${average} | Grade ${grade} | ${status}`);




// 4) Print a clean class report + summary
// Print each student like:

// Amina: Avg 79.25 | Grade B | PASS
// Brian: Avg 55.75 | Grade D | FAIL

}