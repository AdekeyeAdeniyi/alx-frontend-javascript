/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
function updateStudentGradeByCity(data, location, newGrade) {
  if (Array.isArray(data) && location && Array.isArray(newGrade)) {
    const result = [...data].filter((item) => item.location === location);

    [...result].map((data) => {
      data.grades = 'N/A';
      [...newGrade].forEach((el) => {
        if (el.studentId === data.id) {
          data.grades = el.grade;
        }
      });
    });

    return result;
  }

  return [];
}

export default updateStudentGradeByCity;
