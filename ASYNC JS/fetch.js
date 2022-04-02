const URL = "https://jsonplaceholder.typicode.com/postsss";

// fetch returns promise
// response of fetch also returns promise

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("within catch");
    console.log(error);
  });
