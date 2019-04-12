export const signinRequest = (endpoint, method = "get", body) => {
  return fetch(endpoint, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
