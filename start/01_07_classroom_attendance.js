function getStudents(classroom){
  let { hasTeachingAssistant, classlist } = classroom;
  let teacher, TeachingAssistant, students;

  if(hasTeachingAssistant){
    [teacher, TeachingAssistant, ...students] = classlist;
  } else {
    [teacher, ...students] = classlist;
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: false,
  classlist: ['Teacher', 'Student 01', 'Student 02', 'Student 03', 'Student 04']
}));

console.log(getStudents({
  hasTeachingAssistant: true,
  classlist: ['Teacher', 'Assistant', 'Student 05', 'Student 06', 'Student 07', 'Student 08']
}));