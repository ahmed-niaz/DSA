// create an array with 5 students names,after that create a function which takes 2 parameter(allStudents & studentName) iterate over all student and find that specific user 'studentName'

// Data structure
const stdData = ["Niaz", "Emon", "Fahad", "Nayeem", "Sazib"];

// algorithm to find a specific user
const findStd = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStd(stdData, "Emon");

