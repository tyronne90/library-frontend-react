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

export default { AddSubClass };
