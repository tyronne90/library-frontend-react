function AddMainClass(data) {
  fetch(`http://localhost:8080/library/saveMainClass`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
function deleteEmployee(id) {
  fetch('http://localhost:5118/api/employeedetails/deleteemployeedetails/' + id, {
    method: 'DELETE',
    mode: 'CORS'
  })
}


export default { AddMainClass };
