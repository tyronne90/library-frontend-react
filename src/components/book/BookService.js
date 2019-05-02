function AddBook(data) {
  fetch(`http://localhost:8080/library/saveBook`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

function DeleteBook(bookId) {
  fetch("http://localhost:8080/library/deleteBook/" + bookId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(this.state)
  });
}

function UpdateBook(data) {
  return fetch("http://localhost:8080/library/updateBook", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export default { AddBook, DeleteBook, UpdateBook };
