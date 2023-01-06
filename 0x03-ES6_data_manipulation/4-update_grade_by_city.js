function updateStudentGradeByCity(data, location, newGrade) {
  if (Array.isArray(data) && location && Array.isArray(newGrade)) {
    const result = [...data].filter((item) => item.location === location);

    const newData = [...result].map((data) => {
      const student = data;
      student.grades = 'N/A';
      [...newGrade].forEach((grade) => {
        if (grade.studentId === student.id) {
          student.grades = grade.grade;
        }
      });

      return student;
    });

    return newData;
  }

  return [];
}

export default updateStudentGradeByCity;
