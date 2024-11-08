// create an array with 5 students names,after that create a function which takes 2 parameter(allStudents & studentName) iterate over all student and find that specific user 'studentName'

{
  const stdData: string[] = ["Niaz", "Emon", "Fahad", "Nayeem", "Sazib"];

  function findStudent(allStudents: string[], studentName: string): string {
    const findStd = allStudents.find((std) => std === studentName);
    if (findStd) {
      return `Found ${findStd}`;
    } else {
      return `Not found the specific std`;
    }
  }
}

console.log(findStudent(stdData, "Emon"));
