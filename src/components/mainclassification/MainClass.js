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

function FetchMainClass() {
  // fetch(`http://localhost:8080/library/getAllMainClass`)
  //   .then(response => response.json())
  //   .then(data =>
  //     this.setState({
  //       getMainClass: data,
  //       isLoading: false
  //     })
  //   )
  //   .catch(error => this.setState({ error, isLoading: false }));
}

export default { AddMainClass, FetchMainClass };
// export default AddMainClass;
