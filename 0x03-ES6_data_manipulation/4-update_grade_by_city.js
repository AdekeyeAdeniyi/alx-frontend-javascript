function updateStudentGradeByCity(data, location, newGrade) {
  if (Array.isArray(data) && location && Array.isArray(newGrade)) {
    const result = [...data].filter((item) => item.location === location);

    const newData = [...result].map((data) => {
      const student = data;
      student.grade = 'N/A';
      [...newGrade].forEach((grade) => {
        if (grade.studentId === student.id) {
          student.grade = grade.grade;
        }
      });

      return student;
    });

    return newData;
  }

  return [];
}

export default updateStudentGradeByCity;
