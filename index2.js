const url = "https://catfact.ninja/fact";
const root = document.getElementById("root");
const h2 = document.createElement("h2");

const fetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      h2.innerText = data.fact;
      root.append(h2);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("all done"));
};

fetchData();
