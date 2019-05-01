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

function DeleteMainClass(mainClassId) {
  fetch("http://localhost:8080/library/deleteMainClassById/" + mainClassId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  });
}

function UpdateMainClass(data) {
  return fetch("http://localhost:8080/library/updateMainClassification", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export default { AddMainClass, DeleteMainClass, UpdateMainClass };
