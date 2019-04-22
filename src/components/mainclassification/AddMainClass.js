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

// export default { Mainclass, MainclassGET };
export default AddMainClass;
