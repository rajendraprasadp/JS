// evenmt bubbling and  event capturing

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing events===> add boolean value

child.addEventListener(
  "click",
  () => {
    console.log("capture!!! child");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("capture!!! parenn");
  },
  true
);
grandparent.addEventListener(
  "click",
  () => {
    console.log("capture!!! grand");
  },
  true
);
document.addEventListener(
  "click",
  () => {
    console.log("capture!!! body");
  },
  true
);

// event bubbling or event propagation
// not capturing===> third argument not definned

child.addEventListener("click", () => {
  console.log("bubble child");
});
parent.addEventListener("click", () => {
  console.log("bubble parenn");
});
grandparent.addEventListener("click", () => {
  console.log("bubble grand");
});
document.addEventListener("click", () => {
  console.log("bubble body");
});

//  capture!!! body ===>  Event capturing from top to bottom
//  capture!!! grand
//  capture!!! parenn
//  capture!!! child

//  bubble child  ===> Event bubbling from bottom to top
//  bubble parenn
//  bubble grand
//  bubble body

// event delegation
const grand = document.querySelector(".grandparent");
grand.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
