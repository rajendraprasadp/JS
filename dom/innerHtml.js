// innerHTML

const headline = document.querySelector(".headline");

headline.innerHTML = "<h1>Inner html changed</h1>";
headline.innerHTML += "<button>hello</button>";
console.log(headline);
console.log(headline.innerHTML);
{
  /* <h1>Inner html changed</h1><button>hello</button> */
}
