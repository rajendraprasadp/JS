// async and await

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));
console.log("first");
const URL = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

// async function always returns promise

getPost()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
console.log("end");
