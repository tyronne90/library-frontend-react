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
    method: "DELETE"
  });
}

function UpdateSubClass(data) {
  return fetch(
    "http://localhost:8080/library/updateSubClassification",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  )
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export default { AddSubClass, DeleteSubClass, UpdateSubClass };
