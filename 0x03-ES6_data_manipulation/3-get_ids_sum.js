function getStudentIdsSum(data) {
  if (Array.isArray(data)) {
    return [...data].reduce((accumulator, currentvalue) => accumulator + currentvalue.id, 0);
  }

  return [];
}

export default getStudentIdsSum;
