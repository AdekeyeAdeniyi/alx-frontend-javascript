function groceriesList() {
  const newMap = new Map();
  const values = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  for (const [val, key] of Object.entries(values)) {
    newMap.set(val, key);
  }

  return newMap;
}

export default groceriesList;
