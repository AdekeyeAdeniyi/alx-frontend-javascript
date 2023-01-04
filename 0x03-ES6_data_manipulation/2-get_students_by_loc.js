function getStudentsByLocation(data, location) {
  if (Array.isArray(data) && location) {
    return [...data].filter((item) => item.location === location);
  }

  return [];
}

export default getStudentsByLocation;
