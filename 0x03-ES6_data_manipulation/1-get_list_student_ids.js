function getListStudentIds(args) {
  if (Array.isArray(args)) {
    return [...args].map((item) => item.id);
  }

  return [];
}

export default getListStudentIds;
