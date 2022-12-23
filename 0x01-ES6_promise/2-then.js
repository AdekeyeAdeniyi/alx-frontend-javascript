function handleResponseFromAPI(promise) {
  const object = {
    satus: 200,
    body: 'success',
  };
  promise
    .then(() => object)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
