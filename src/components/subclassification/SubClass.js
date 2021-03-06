function AddSubClass(data) {
  fetch(`http://localhost:8080/library/saveSubClass`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

function DeleteSubClass(subClassId) {
  fetch("http://localhost:8080/library/deleteSubClassById/" + subClassId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  });
}

function UpdateSubClass(data) {
  return fetch("http://localhost:8080/library/updateSubClassification", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export default { AddSubClass, DeleteSubClass, UpdateSubClass };
